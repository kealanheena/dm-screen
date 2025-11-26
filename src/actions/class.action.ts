"use server";

import prisma from "@/lib/prisma";

import { getDbUserId } from './user.action';


export async function getClasses() {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	return prisma.class.findMany({
		select: {
			id: true,
			name: true,
		}
	});
}