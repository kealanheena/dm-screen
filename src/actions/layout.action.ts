"use server";

import prisma from "@/lib/prisma";

export async function getLayout(id: number) {
 return prisma.layout.findUnique({
		where: { id },
		include: {
			blocks: true,
		}
	});
}