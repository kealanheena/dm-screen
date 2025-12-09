"use server";

import { trim } from 'lodash';

import prisma from "@/lib/prisma";
import { DMScreenType } from "@/types";

import { getDbUserId } from './user.action';


export async function createScreen(data: Pick<DMScreenType, "name">) {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	const { name } = data;

	return prisma.screen.create({
		data: {
			name: trim(name),
			userId,
		}
	});
}

export async function getScreens(data?: { campaignId?: number }) {
	const where = data || {};

	return prisma.screen.findMany({
		where,
		select: {
			id: true,
			name: true,
		}
	});
}

export async function getCampaignlessScreens() {
	return prisma.screen.findMany({
		where: {
			campaignId: null,
		},
		select: {
			id: true,
			name: true,
		}
	});
}

export async function getScreenById(id: number) {
	const screen = await prisma.screen.findUnique({
		where: { id },
		select: {
			cards: {
				select: {
					title: true,
					layout: {
						select: {
							id: true,
							x: true,
							y: true,
							h: true,
							w: true,
						}
					},
				}
			},
		}
	})
	
 return screen;
}

export async function updateScreen(
	id: number,
	data: Pick<DMScreenType, "name">,
) {
	const { name } = data;

 	return prisma.screen.update({
		where: { id },
		data: {
			name: trim(name),
		}
	});
}