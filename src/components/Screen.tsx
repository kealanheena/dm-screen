"use client"

import React, { useState } from 'react';
import { find, filter, last, map }  from 'lodash';

import { Card, CardContent, Grid, Slider, Typography } from '@mui/material';
import increaseSectionSizeRight from '@/utils/increaseSectionSizeRight'
import { Layout } from '@/types';
import toast from 'react-hot-toast';

export default function Screen() {
	const [range, setRange] = useState<number[]>([0, 5])
	const [layouts, setLayouts] = useState<Layout[]>([
		{ id: 1, start: 0, width: 5 },
	 	{ id: 2, start: 5, width: 3  },
	 	{ id: 3, start: 8, width: 2  },
	 	{ id: 4, start: 10, width: 2  },
	]);
	const [hoverTarget, setHoverTarget] = useState<number | null>(null)
	const [currentLayoutId, setCurrentLayoutId] = useState<number>(1);

	const onChangeLayout = (e) => {
		const layout: Layout | undefined = find(layouts, ['id', currentLayoutId]);
		if (!layout) {
			// toast.error('Cannot increase size of section');
			return;
		}

		const newRange: number[] = e.target.value;
		const { start, width } = layout;

		const newLayouts: Layout[] | undefined = increaseSectionSizeRight({
			layoutId: currentLayoutId,
			layouts,
			newRange: newRange[1],
			range: range[1],
		});

		if (!newLayouts) {
			return;
		}

		console.log({newLayouts})

		setLayouts(newLayouts)

		setRange(newRange);

	// Increase the last item in the array

	// Get layout to the right
	// Decrease its starting point by 1

		

		// console.log({
		// 	newRange,
		// 	layout: [start, start + width]
		// })
		
	}
	const onClickSection = (id: number) => () => {
		setCurrentLayoutId(id);
		const layout: Layout | undefined = find(layouts, ['id', id]);

		if (!layout) {
			return;
		}

		const { start, width } = layout;
		setRange([start, start + width]);
	}

	const onMouseLeaveSection = () => setHoverTarget(null);



	const getPadding = (id: number) => (
		hoverTarget === id ? { 
			padding: '0px'
		} : {
			padding: '5px'
		}
	);

  return (
		<div style={{ height: '100%'  }}>
			<div style={{ padding: '10px' }}>
			<Slider
				value={range}
				min={0}
				max={12}
				marks
				aria-label="width slider"
				valueLabelDisplay="auto"
				onChange={onChangeLayout}
			/>
			</div>
			<Grid container spacing={1} style={{ height: '100%', padding: '10px' }}>
				{map(layouts, ({ id, width }: Layout) => {
					const padding = getPadding(id);

					return (
						<Grid 
							style={padding}
							key={id}
							size={width}
							onMouseEnter={() => setHoverTarget(id)}
							onMouseLeave={onMouseLeaveSection}
							onClick= {onClickSection(id)}
						>
							<Card
								style={id === hoverTarget ? {
									transition: "transform 0.15s ease-in-out",
								} : {}}
							>
								<CardContent>
									<Typography>size={width}</Typography>
								</CardContent>
							</Card>
						</Grid>
					)}
				)}
			</Grid>
		</div>
  );
}