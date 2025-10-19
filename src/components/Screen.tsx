"use client"

import React from 'react';
import { map }  from 'lodash';

import { Card, CardContent, Grid, Typography } from '@mui/material';


export default function Screen() {
	const array = [4, 2, 5, 1]
  return (
		<Grid container spacing={2} style={{ height: '100%', padding: '10px' }}>
			{map(array, (number: number) => (
				<Grid size={number}>
					<Card>
						<CardContent>
							<Typography>size={number}</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
  );
}