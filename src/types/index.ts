export interface LayoutType {
	id: number;
	// Using MUIs grid which is made up of 12 sections
	start: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 ;
	// the 2 makes it a minWidth of 2 sections
	width: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 ;
	cards: CardType[];
}

export interface CardType {
	id: number;
	title: string;
	height?: number;
	img?: string;
}