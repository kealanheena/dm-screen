"use client"

import React, { useEffect, useState } from 'react';
import { compact, find, head, map, max, get, orderBy }  from 'lodash';

import { Box, Grid, FormControl, InputLabel, IconButton, MenuItem, Paper, Select, Slider, Typography } from '@mui/material';
import { Map } from '@mui/icons-material';
import onChangeSection from '@/utils/onChangeSection'
import { Layout } from '@/types';

import Block from './Layout';
import DeleteButton from './DeleteButton';
import { AddCircleOutlineRounded } from '@mui/icons-material';

interface ScreenProps {
	layouts: Layout[];
}

export default function Screen({ layouts }: ScreenProps) {
	const [currentLayout, setCurrentLayout] = useState<Layout | undefined>(head(layouts));

	const handleChange = (e) => setCurrentLayout(e.target.value);

	return (
		<Box
			sx={{ p: 2, height: '100%' }}
		>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
			>
				<Grid>
					<FormControl
						sx={{ m: 1, minWidth: 250 }}
						size="small"
					>
						<InputLabel id="current-dm-screen-label">Current dm screen</InputLabel>
						<Select
							labelId="current-dm-screen-label"
							id="dm-screen-select"
							label="Current dm screen"
							value={get(currentLayout, 'id', 0)}
							onChange={handleChange}
						>
							<MenuItem disabled value={0}><em>Choose a dm screen</em></MenuItem>

							{map(compact(layouts), ({ id, title }) => (
								<MenuItem
									key={`dm_screen_select_${id}`}
									value={id}
								>
									{title}
								</MenuItem>
							))}
						</Select>
					</FormControl>	
				</Grid>
				{currentLayout && (
					<Grid>
						test
					</Grid>
				)}
			</Grid>
		</Box>
	);
}

export function Blocks({ layouts }: ScreenProps) {
	const [currentLayout, setCurrentLayout] = useState<Layout>();
	const [range, setRange] = useState<number[]>([])

	useEffect(() => {
		const orderedLayouts = orderBy(layouts, 'blocks.start');

		console.log( { layouts, layoutsOne: get(orderedLayouts, '[0].blocks')  } );

		if (layouts) {
			const { id, start, width } = get(orderedLayouts, '[0].blocks[0]');

	
			// setLayouts(orderBy(testLayouts, 'start'));
			setCurrentLayout(orderedLayouts[0]);
			setRange([start, width]);
		}
	}, [])

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onChangeLayout = (e: any): void => {
		const layout: Layout | undefined = find(layouts, ['id', currentLayoutId]);

		if (!layout) {
			return;
		}

		const newRange: number[] = map(e.target.value, (value: string) => Number(value));

		const newLayouts: Layout[] | undefined = onChangeSection({
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

		// setLayouts(newLayouts)
		setRange([start, start + width]);
	};

	const onClickSection = (id: number) => () => {
		setCurrentLayoutId(id);
		const layout: Layout | undefined = find(layouts, ['id', id]);

		if (!layout) {
			return;
		}

		const { start, width } = layout;
		setRange([start, start + width]);
	}

	const onAddSection = () => {
		// const maxIdLayout = max(layouts, ({ id }: Layout) => id);

		// const newLayout: Layout = {
		// 	id: (maxIdLayout?.id || 1) +1,
		// 	...BASE_LAYOUT,
		// }
	};

	const onDeleteSection = () => {
		let deletedLayout: Layout | null = null;

		const newLayouts: Layout[] = compact(
			map(layouts, (layout) => {
				if (currentLayoutId === layout.id) {
					deletedLayout = layout;
					return;
				}

				if (deletedLayout && layout.width > 2) {
					const newLayout = {
						...layout,
						width: layout.width + deletedLayout.width,
						start: deletedLayout.start
					};

					deletedLayout = null;

					return newLayout;
				}

				return layout;

			})
		);

		const currentLayout = newLayouts[0];
		if (currentLayout) {
			setCurrentLayoutId(currentLayout.id)
			setRange([currentLayout.start, currentLayout.width])
			// setLayouts(newLayouts);
		}

	};

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
					<Grid
						key={id}
						size={width}
						sx={{ transition: "transform 0.15s ease-in-out" }}
					>
						{currentLayoutId === id && (
							<Grid
								container
								alignItems="center"
								justifyContent="end"
							>
								<IconButton 
									onClick={onAddSection}
								>
									<AddCircleOutlineRounded />
								</IconButton>
								<DeleteButton
									icon='icon_only'
									tooltip='Delete column'
									onClick={onDeleteSection}
								/>
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
				<Grid container style={{ height: '100%' }}>
					{map(layouts, (layout) => (
						<Block
							key={layout.id}
							isCurrentLayout={layout.id === currentLayout.id}
							layout={layout} 
							onClickLayout={onClickSection}
						/>
					))}
				</Grid>
			</Paper>
		</div>
  );
}