"use client"

import React, { useState } from 'react';

import { Button, Card, CardContent, Grid, Paper, Slider, IconButton, Tooltip, Typography } from '@mui/material';
import { Delete, OpenWith } from '@mui/icons-material';
import { LayoutType } from '@/types';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';

export default function Screen({ layout, onClickLayout }: { layout: LayoutType, onClickLayout: Function }) {
	const { id, width } = layout;
	

  return (
		<Grid
			key={id}
			size={width}
			sx={{
				'&:hover': {
					cursor: 'pointer',
					border: 2,
					borderRadius: 2,
					borderColor: 'primary.main',
					p: 0.5,
				},
				transition: "transform 0.15s ease-in-out",
				p: 1,
			}}
			onClick={onClickLayout(id)}
		>
			<Grid
				container
				sx={{ justifyContent: 'end', alignItems: 'center' }}
			>
				<DeleteButton
					icon="icon_only"
					tooltip="Delete column"
					onClick={() => {}}
				/>
				<AddButton
					icon="icon_only"
					tooltip="Add card"
					onClick={() => {}}
				/>
			</Grid>
			
			
			<Card>
				<CardContent>
					<Grid container flexDirection="column">
						<Grid
							container
							sx={{ justifyContent: 'space-between', alignItems: 'center' }}
						>
							<Typography>
								size={width}
							</Typography>

							<Tooltip title="Move card">
								<IconButton 
									// {...listeners}
									// {...attributes}
								>
									<OpenWith />
								</IconButton>
							</Tooltip>
						</Grid>

						<Grid>
							<Typography >
								{id}
							</Typography>
						</Grid>

						<Grid
							container
							sx={{ justifyContent: 'end', alignItems: 'center' }}
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
		</Grid>
  );
}