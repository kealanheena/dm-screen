"use server";

import { trim } from 'lodash';

import prisma from "@/lib/prisma";
import { DMScreenType } from "@/types";

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


export async function createScreen(data: Pick<DMScreenType, "title">) {
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

export async function getScreens() {
	return await prisma.screen.findMany({
		select: {
			id: true,
			title: true,
		}
	});
}

export async function getScreenById(id: number) {
 return prisma.screen.findUnique({
		where: { id },
		select,
	});
}

export async function updateScreen(
	id: number,
	data: Pick<DMScreenType, "title">,
) {
	const { title } = data;

 	return prisma.screen.update({
		where: { id },
		data: {
			title: trim(title),
		}
	});
}