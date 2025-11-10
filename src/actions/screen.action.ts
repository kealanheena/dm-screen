"use server";

import { trim } from 'lodash';
import prisma from "@/lib/prisma";
import { Layout } from "@/types";
import { getDbUserId } from './user.action';

export async function createScreen(data: Pick<Layout, "title">) {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	const { title } = data;

	return prisma.screen.create({
		data: {
			title: trim(title),
			userId,
		}
	});
}

export async function getScreens(
	where?: Partial<Pick<Layout, 'title' | 'isTemplate'>>
) {
 return prisma.screen.findMany({
		where,
		select: {
			id: true,
			title: true,
			isTemplate: true,
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

export async function updateScreen(
	id: number,
	data: Pick<Layout, "title">,
) {
	const { title } = data;

 	return prisma.screen.update({
		where: { id },
		data: {
			title: trim(title),
		}
	});
}