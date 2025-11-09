"use server";

import prisma from "@/lib/prisma";
import { Layout } from "@/types";

export async function getDefaultScreens() {
 return prisma.screen.findMany({
		where: { isDefault: true },
		select: {
			id: true,
			title: true,
			sections: {
				select: {
					id: true,
					start: true,
					width: true,
					cards: {
						select: {
							title: true,
							height: true,
						}
					},
				}
			},
		}
	});
}

export async function updateScreen({ id, title }: Pick<Layout, "id" | "title">) {
 return prisma.screen.update({
		where: { id },
		data: { title }
	});
}