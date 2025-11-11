"use server";

import prisma from "@/lib/prisma";
import { Section } from "@/types";

import { getDbUserId } from './user.action';
import { getScreen } from './screen.action'


export async function createSection(screenId: number, data: Pick<Section, "start" | "width">) {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	const screen = await getScreen(screenId);

	if (!screen) {
		return;
	}

	if (screen.sections.length <= 0) {
		return prisma.section.create({
			data: {
				screenId,
				...data,
			}
		});
	}

	return;
	
}
