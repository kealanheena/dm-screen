export interface LayoutType {
	id: number;
	start: number; 
	width: number;
}

export interface CardType {
	id: number;
	title: string;
	height?: number;
	// Using MUIs grid which is made up of 12 sections
	// the 2 makes it a minWidth of 2 sections
	width: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 ;
	img?: string;
}