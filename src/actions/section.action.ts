"use server";

import { map } from "lodash";

import prisma from "@/lib/prisma";
import { SectionType } from "@/types";

import { getDbUserId } from './user.action';
import { getScreenById } from './screen.action'


export async function createSection(screenId: number, data: Pick<SectionType, "start" | "width">) {
	const userId = await getDbUserId();

	console.log('userId ', userId);

	if (!userId) {
		return;
	}

	const screen = await getScreenById(screenId);

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

	const tasks = map(screen.sections, async (section: SectionType) => {
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
