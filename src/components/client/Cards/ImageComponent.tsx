'use client'

import React from "react";

import { Groups } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import PlayerCharacterFormDialog from "../PlayerCharacterFormDialog";

const ImageComponent = ({ card }: { card: { id: number, title: string }}) => {



	return (
		<Card>
			<CardContent sx={{ height: '100%'}}>
				<Grid container justifyContent="space-between">
					<Grid display="flex" alignItems="center">
						<Groups color='primary'/>
						<Typography sx={{ pl: 1 }} variant="h6">{card.title}</Typography>
					</Grid>

					<PlayerCharacterFormDialog />
				</Grid>
				<img 
					style={{
						maxWidth: '100%',
						maxHeight: '100%',
						height: 'auto',
						width: 'auto',
						margin: 'auto',
						display: 'block'
					}}
					src="http://odcq35p17f.ufs.sh/f/imZyPGT0bjSH6NbzOMRx0HjrmGJ2CKLFWcvAnfubwoNPzXEk"
				/>
			</CardContent>
		</Card>
	)
};

export default ImageComponent;