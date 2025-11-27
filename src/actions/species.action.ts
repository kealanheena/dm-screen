"use server";

import prisma from "@/lib/prisma";


export async function getSpecies() {
	return prisma.species.findMany({
		select: {
			id: true,
			name: true,
			subSpecies: {
				select: {
					id: true,
					name: true,
				}
			},
		}
	})
	
}
