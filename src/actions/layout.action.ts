"use server";

import prisma from "@/lib/prisma";

export async function getDefaultLayouts() {
 return prisma.layout.findMany({
		where: { isDefault: true },
		select: {
			id: true,
			blocks: {
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

export async function getLayout(id: number) {
 return prisma.layout.findUnique({
		where: { id },
		include: {
			blocks: true,
		}
	});
}