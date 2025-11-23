"use server";

import prisma from "@/lib/prisma";

import { getDbUserId } from './user.action';


export async function getClass() {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	return prisma.class.findMany({
		select: {
			id: true,
			title: true,
		}
	});
}