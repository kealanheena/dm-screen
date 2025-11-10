import { getUserByClerkId } from '@/actions/user.action'

export type User = Awaited<ReturnType<typeof getUserByClerkId>>;

export interface Layout {
	id: number;
	title: string;
	isTemplate: boolean;
	sections: Section[];
}

export interface Section {
	id: number;
	start: number;
	width: number; // the 2 makes it a minWidth of 2 sections
	cards: Card[];
}

export interface Card {
	id: number;
	title: string;
	height?: number;
	img?: string;
}