"use server";

import prisma from "@/lib/prisma";

export async function getDefaultLayout() {
	try {
		return prisma.layout.findFirst({
			where: { isDefault: true },
			select: {
				id: true,
				title: true,
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
	} catch (error) {
		throw new Error('Default layout not found (404)');
	}
}

export async function getDefaultLayouts() {
 return prisma.layout.findMany({
		where: { isDefault: true },
		select: {
			id: true,
			title: true,
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