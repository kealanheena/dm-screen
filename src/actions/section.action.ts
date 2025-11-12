"use server";

import prisma from "@/lib/prisma";
import { Section } from "@/types";

import { getDbUserId } from './user.action';
import { getScreen } from './screen.action'
import { map, orderBy } from "lodash";


export async function createSection(screenId: number, data: Pick<Section, "start" | "width">) {
	const userId = await getDbUserId();

	console.log('userId ', userId);

	if (!userId) {
		return;
	}

	const screen = await getScreen(screenId);

	console.log('screen ', screen);

	if (!screen) {
		return;
	}

	const newTotalSections = screen.sections.length + 1;
	let start: number = 0;

	console.log('screen ', screen, newTotalSections % 12 !== 0);

	if (12 % newTotalSections !== 0) {
		return;
	}

	const width = 12 / newTotalSections;

	const tasks = map(screen.sections, async (section: Section) => {
		await prisma.section.update({
			where: { id: section.id },
			data: {
				start: start,
				width,
			}
		});

		start = start + width
	});

	await Promise.all(tasks);
	
	return prisma.section.create({
		data: {
			screenId,
			start: start || 0,
			width,
		}
	});
}

export async function deleteSection(sectionId: number) {
	const userId = await getDbUserId();

	if (!userId) {
		return;
	}

	return prisma.section.delete({
		where: { id: sectionId }
	});	
}
