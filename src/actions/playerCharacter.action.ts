"use server";

import prisma from "@/lib/prisma";

import { getDbUserId } from './user.action';


export async function getPlayerCharacters() {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	return prisma.playerCharacter.findMany({
		select: {
			id: true,
			name: true,
			url: true,
			classId: true,
			speciesId: true,
			subspeciesId: true,
		},
		orderBy: {
			name: 'asc', // Sort by creation date in descending order
		},
	});
}