import React from 'react';

import {
	Card, 
	CardContent, 
	Grid,
	Tooltip,
	Typography
} from '@mui/material';
import { OpenWith } from '@mui/icons-material';
import { CardType } from '@/types';
import IconButton from './IconButton';


const LayoutCard = ({ card }: { card: CardType }) => (
	<Card sx={{ mt: 1, mb: 1 }}>
		<CardContent>
			<Grid container flexDirection="column">
					<Typography>
						{card.title}
					</Typography>

				<Grid>
					<Typography>
						Id Example
					</Typography>
				</Grid>

				<Grid
					container
					alignItems="center"
					justifyContent="end"
				>
					<IconButton 
						icon="DRAG"
						onClick={() => {}}
						variant="icon_only"
						tooltip="Move card"
					/>
				</Grid>
			</Grid>

		</CardContent>
	</Card>
);

export default LayoutCard;