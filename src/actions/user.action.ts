"use server";

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
// import { revalidatePath } from "next/cache";


export async function syncUser() {

	try {
		const { userId } = await auth();
		const user = await currentUser();

		if (userId) {
			const existingUser = await prisma.user.findUnique({
				where: {
					clerk_id: userId,
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
					clerk_id: userId,
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
		where: { clerk_id: clerkId },
	});
}

export async function getDbUserId() {
	const { userId: clerkId } = await auth()

	if (!clerkId) {
		return null;
	}

	const user = await getUserByClerkId(clerkId)

	if (!user) {
		return null;
		// throw new Error("User not found");
	}

	return user?.id;
}

export async function getUserScreens(userId: number) {
	const where: Prisma.ScreenFindManyArgs['where'] =  {
		userId,
	}
  const [screens, count] = await prisma.$transaction([
    prisma.screen.findMany({
			where,
			select: {
				id: true,
				name: true,
			}
		}),
    prisma.screen.count({ where })
  ]);

	return { screens, count };
}
