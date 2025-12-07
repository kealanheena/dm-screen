"use server";

import prisma from "@/lib/prisma";


export async function createCard(
	data: {
		screenId: number,
		title: string,
		type: string,
		listContent: string | null,
	 },
) {
	const { card, cardLayout } = prisma;

	const newCard = await card.create({ data });

	const newLayout = await cardLayout.create({
		data: { cardId: newCard.id }
	});

	return {
		...newCard,
		layout: newLayout,
	}
}
