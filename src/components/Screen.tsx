"use client"

import React, { useState } from 'react';
import { find, map }  from 'lodash';

import { Card, CardContent, Grid, Slider, Typography } from '@mui/material';
import onChangeSection from '@/utils/onChangeSection'
import { LayoutType } from '@/types';

export default function Screen() {
	const [range, setRange] = useState<number[]>([10, 12])
	const [layouts, setLayouts] = useState<Layout[]>([
		{ id: 1, start: 0, width: 5 },
	 	{ id: 2, start: 5, width: 3  },
	 	{ id: 3, start: 8, width: 2  },
	 	{ id: 4, start: 10, width: 2  },
	]);
	const [hoverTarget, setHoverTarget] = useState<number | null>(null)
	const [currentLayoutId, setCurrentLayoutId] = useState<number>(4);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onChangeLayout = (e: any): void => {
		const layout: LayoutType | undefined = find(layouts, ['id', currentLayoutId]);

		if (!layout) {
			return;
		}

		const newRange: number[] = map(e.target.value, (value: string) => Number(value));

		const newLayouts: LayoutType[] | undefined = onChangeSection({
			layoutId: currentLayoutId,
			layouts,
			newRange,
			range,
		});

		if (!newLayouts) {
			return;
		}

		const newLayout = find(newLayouts, ['id', currentLayoutId]);

		if (!newLayout) {
			return;
		}

		const { start, width } = newLayout;

		setLayouts(newLayouts)
		setRange([start, start + width]);
	};

	const onClickSection = (id: number) => () => {
		setCurrentLayoutId(id);
		const layout: LayoutType | undefined = find(layouts, ['id', id]);

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
				{map(layouts, ({ id, width }: LayoutType) => {
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