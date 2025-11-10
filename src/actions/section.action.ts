"use server";

import { trim } from 'lodash';
import prisma from "@/lib/prisma";
import { Section } from "@/types";
import { getDbUserId } from './user.action';

export async function createSection(screenId: number, data: Pick<Section, "start" | "width">) {
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
