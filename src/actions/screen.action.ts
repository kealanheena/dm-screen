"use server";

import { trim } from 'lodash';
import prisma from "@/lib/prisma";
import { Screen } from "@/types";
import { getDbUserId } from './user.action';

const select = {
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


export async function createScreen(data: Pick<Screen, "title">) {
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
	where?: Partial<Pick<Screen, 'title' | 'isTemplate'>>
) {
	return await prisma.screen.findMany({
		where,
		include: {
			sections: {
				orderBy: {
					start: 'asc'
				},
			}
			
		}
	});
}

export async function getScreen(id: number) {
 return prisma.screen.findUnique({
		where: { id },
		select,
	});
}

export async function updateScreen(
	id: number,
	data: Pick<Screen, "title">,
) {
	const { title } = data;

 	return prisma.screen.update({
		where: { id },
		data: {
			title: trim(title),
		}
	});
}