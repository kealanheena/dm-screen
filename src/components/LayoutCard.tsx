import React from 'react';

import {
	Card, 
	CardContent, 
	Grid,
	IconButton, 
	Tooltip,
	Typography
} from '@mui/material';
import { OpenWith } from '@mui/icons-material';
import { CardType } from '@/types';

import DeleteButton from './DeleteButton';


const LayoutCard = ({ card }: { card: CardType }) => (
	<Card sx={{ mt: 1, mb: 1 }}>
		<CardContent>
			<Grid container flexDirection="column">
				<Grid
					container
					sx={{ justifyContent: 'space-between', alignItems: 'center' }}
				>
					<Typography>
						{card.title}
					</Typography>

					<Tooltip title="Move card">
						<IconButton >
							<OpenWith />
						</IconButton>
					</Tooltip>
				</Grid>

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
					<DeleteButton
						icon="icon_only"
						tooltip="Delete card"
						onClick={() => {}}
					/>
				</Grid>
			</Grid>

		</CardContent>
	</Card>
);

export default LayoutCard;