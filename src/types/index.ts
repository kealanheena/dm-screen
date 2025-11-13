import { getUserByClerkId } from '@/actions/user.action'

export type User = Awaited<ReturnType<typeof getUserByClerkId>>;

export interface DMScreenType {
	id: number;
	title: string;
	// isTemplate: boolean;
	// sections: Section[];
}

export interface SectionType {
	id: number;
	start: number;
	width: number;
	cards: CardType[];
}

export interface CardType {
	id: number;
	title: string;
	height?: number;
	img?: string;
}