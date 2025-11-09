"use server";

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";


export async function syncUser() {

	try {
		const { userId } = await auth();
		const user = await currentUser();

		if (userId) {
			const existingUser = await prisma.user.findUnique({
				where: {
					clerkId: userId,
				}
			});

			if (existingUser) {
				return existingUser;
			}
		}

		if (user && userId) {
			const email = user.emailAddresses[0].emailAddress;

			const dbUser = await prisma.user.create({
				data: {
					clerkId: userId,
					name: `${user.firstName || ""} ${user.lastName || ""}`,
					username: user.username ?? email.split('@')[0],
					email,
					image: user.imageUrl,
				}
			});

			return dbUser;
		}

		return;

	} catch (error) {
		console.log('Error in syncUser', error)
	}
	
}

export async function getUserByClerkId(clerkId: string) {
 return prisma.user.findUnique({
		where: { clerkId },
	});
}

export async function getDbUserId() {
	const { userId: clerkId } = await auth()

	if (!clerkId) {
		return null;
	}

	const user = await getUserByClerkId(clerkId)

	if (!user) {
		throw new Error("User not found");
	}

	return user?.id;
}
