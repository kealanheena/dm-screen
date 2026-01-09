"use server";

import prisma from "@/lib/prisma";

import { getDbUserId } from './user.action';


export async function getPlayerCharacters() {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	return prisma.player_Character.findMany({
		select: {
			id: true,
			name: true,
			url: true,
			archtype_id: true,
			species_id: true,
			subspecies_id: true,
		},
		orderBy: {
			name: 'asc', // Sort by creation date in descending order
		},
	});
}