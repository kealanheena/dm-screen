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

	// we need to get the screen
	// check what 

	return;

	// const { start, width } = data;

	// return prisma.screen.create({
	// 	data: {
	// 		title: trim(title),
	// 		userId,
	// 	}
	// });
}
