import React from 'react';

import {
	Card,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
// import { Card as CardType } from '@/types';
// import { ScreenContext } from '@/app/context';

// import LayoutCard from './LayoutCard';


// interface SectionProps { 
// 	cards: CardType;
// }

export default function Section({
	// cards,
}) {
  return (
		<Card>
			<CardContent>
				<Grid container flexDirection="column">
						<Typography>
							{/* {card.title} */} Test
						</Typography>

					<Grid>
						<Typography>
							Id Example
						</Typography>
					</Grid>
				</Grid>

			</CardContent>
		</Card>
  );
}
