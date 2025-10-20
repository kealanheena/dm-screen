"use client"

import React, { useState } from 'react';
import { find, map }  from 'lodash';

import { Card, CardContent, Grid, Slider, Typography } from '@mui/material';

interface Layout {
	id: number;
	start_point: number; 
	width: number;
}

export default function Screen() {
	const [range, setRange] = useState<number[]>([0, 5])
	const [layouts, setLayouts] = useState<Layout[]>([
		{ id: 1, start_point: 0, width: 5 },
	 	{ id: 2, start_point: 5, width: 3  },
	 	{ id: 3, start_point: 8, width: 2  },
	 	{ id: 4, start_point: 10, width: 2  },
	]);
	// const [currentLayoutId, setCurrentLayoutId] = useState<number>(1);

	const onChangeLayout = (e) => {
		// if (finds) {

		// }
		console.log(e.target.value);
	}
	const onMouseEnterSection = (id: number) => () => {
		const layout: Layout | undefined = find(layouts, ['id', id]);

		if (!layout) {
			return;
		}

		const { start_point, width } = layout;
		setRange([start_point, start_point + width]);
	}



	// const maxColumns = (columns - layouts.length); // +1 because columns is 1

  return (
		<div style={{ height: '100%', padding: '10px' }}>
			<Slider
				value={range}
				min={0}
				max={12}
				marks
				aria-label="width slider"
				valueLabelDisplay="auto"
				onChange={onChangeLayout}
			/>
			<Grid container spacing={1} style={{ height: '100%' }}>
				{map(layouts, ({ id, width }: Layout) => (
					<Grid key={id} size={width} onMouseEnter={onMouseEnterSection(id)}>
						<Card >
							<CardContent>
								<Typography>size={width}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
  );
}