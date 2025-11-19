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
