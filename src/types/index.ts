import { getUserByClerkId } from '@/actions/user.action'

export type User = Awaited<ReturnType<typeof getUserByClerkId>>;

export interface CampaignType {
	id: number;
	title: string;
}

export interface DMScreenType {
	id: number;
	title: string;
	sections: SectionType[];
}

export interface SectionType {
	id: number;
	start: number;
	width: number;
	// cards: CardType[];
}

export interface CardType {
	id: number;
	title: string;
	height?: number;
	img?: string;
}

export interface FullDMScreenType extends DMScreenType {
	sections: SectionType[];
}

export interface FullCampaignType extends CampaignType {
	screens: FullDMScreenType[];
}


export interface ServerPageProps {
  params: { id: string };
};