"use server";

import prisma from "@/lib/prisma";

import { getDbUserId } from './user.action';


export async function getCampaigns() {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	return prisma.campaign.findMany({
		where: { userId },
		include: {
			_count: true,
			screens: true
		}
	});
}

export async function getCampaignById(id: number) {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	return prisma.campaign.findUnique({
		where: { id },
		include: {
			_count: true,
			screens: true
		}
	});
}
