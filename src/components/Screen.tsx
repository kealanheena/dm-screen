"use client"

import React, { useState } from 'react';
import { find, map }  from 'lodash';

import { Button, Card, CardContent, Grid, Paper, Slider, IconButton, Tooltip, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Delete, OpenWith } from '@mui/icons-material';
import onChangeSection from '@/utils/onChangeSection'
import { LayoutType } from '@/types';

import Layout from './Layout';

export default function Screen() {
	const [range, setRange] = useState<number[]>([10, 12])
	const [layouts, setLayouts] = useState<LayoutType[]>([
		{ id: 1, start: 0, width: 5 },
	 	{ id: 2, start: 5, width: 3  },
	 	{ id: 3, start: 8, width: 2  },
	 	{ id: 4, start: 10, width: 2  },
	]);
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
			<Grid container>
				{map(layouts, ({ id, width }) => (
					<Grid size={width}>
						{currentLayoutId === id && (
							<Grid
								container
								alignItems="center"
								justifyContent="space-between"
							>
								<Tooltip title="Move section left">
									<IconButton 
										// {...listeners}
										// {...attributes}
									>
										<ArrowBackIos />
									</IconButton>
								</Tooltip>
								<Tooltip title="Move section right">
									<IconButton 
										// {...listeners}
										// {...attributes}
									>
										<ArrowForwardIos />
									</IconButton>
								</Tooltip>
							</Grid>
						)}
					</Grid>
				))}
			</Grid>
			</div>
			<Paper
				elevation={1}
				style={{
					border: '2px #D4D4D4 dashed',
					backgroundColor: 'transparent',
					height: '100%',
				}}
			>
				<Grid container style={{ height: '100%', padding: '10px' }}>
					{map(layouts, (layout: LayoutType) => (
						<Layout layout={layout} onClickLayout={onClickSection} />
					))}
				</Grid>
			</Paper>
		</div>
  );
}