"use server";

import prisma from "@/lib/prisma";


export async function createCard(screenId: number) {
	const { card, cardLayout } = prisma;

	const newCard = await card.create({
		data: { screenId }
	});

	const newLayout = await cardLayout.create({
		data: { cardId: newCard.id }
	});

	return {
		...newCard,
		layout: newLayout,
	}
}
