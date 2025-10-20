"use client"

import React, { useState } from 'react';
import { find, filter, map }  from 'lodash';

import { Card, CardContent, Grid, Slider, Typography } from '@mui/material';

const moveRight = (
	layouts: Layout[],
	{ id, start_point, width }: Layout,
	newRange: number[],
) => {
	// if start point + width is greater than or equal to 12
	// it is at the end of the sections
	if ((start_point + width) >= 12) {
		return;
	}


	// if item to right starting point is 11 do not change
	let include = false
	const sectionsToTheRight = filter(layouts, (layout: Layout) => {
		if (include) {
			return true;
		}
		
		if (layout.id === id) {
			include = true;
		}

		return false
	})

	const reduceWhichLayout: Layout | undefined = find(sectionsToTheRight, ({ width }) => width > 1);

	if (!reduceWhichLayout) {
		return;
	}
	
	return []
}

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
	const [hoverTarget, setHoverTarget] = useState<number | null>(null)
	const [currentLayoutId, setCurrentLayoutId] = useState<number>(1);

	const onChangeLayout = (e) => {
		const layout: Layout | undefined = find(layouts, ['id', currentLayoutId]);
		if (!layout) {
			return;
		}

		const newRange = e.target.value;
		const { start_point, width } = layout;


		moveRight(layouts, layout, newRange)

			// Increase the last item in the array

			// Get layout to the right
			// Decrease its starting point by 1

		

		// console.log({
		// 	newRange,
		// 	layout: [start_point, start_point + width]
		// })
		
	}
	const onClickSection = (id: number) => () => {
		setCurrentLayoutId(id);
		const layout: Layout | undefined = find(layouts, ['id', id]);

		if (!layout) {
			return;
		}

		const { start_point, width } = layout;
		setRange([start_point, start_point + width]);
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
									// "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
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