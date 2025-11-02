"use client"

import React, { useEffect, useState } from 'react';
import { compact, find, filter, map, orderBy }  from 'lodash';

import { Button, Card, CardContent, Grid, Paper, Slider, IconButton, Tooltip, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Delete, OpenWith } from '@mui/icons-material';
import onChangeSection from '@/utils/onChangeSection'
import { LayoutType } from '@/types';

import Layout from './Layout';
import DeleteButton from './DeleteButton';

const testLayouts: LayoutType[] = [
	{
		id: 2, start: 5, width: 3, cards: [
			{ id: 1, title: 'Test Img Card' },
			{ id: 1, title: 'NPCs Card' }
		],
	},
	{ 
		id: 1, start: 0, width: 5, cards: [
			{ id: 1, title: 'First Card' },
			{ id: 1, title: '2nd Card' }
		],
	},

	{ 
		id: 4, start: 10, width: 2, cards: [
			{ id: 1, title: 'This is a new Test' },
			{ id: 1, title: '2nd Test' }
		],
	},
	{ 
		id: 3, start: 8, width: 2, cards: [
			{ id: 1, title: 'List Cards' },
			{ id: 1, title: 'Noice Cardo' }
		],
	},
	
];

export default function Screen() {
	const [layouts, setLayouts] = useState<LayoutType[]>([]);
	const [currentLayoutId, setCurrentLayoutId] = useState<number>(0);
	const [range, setRange] = useState<number[]>([])

	useEffect(() => {
		const orderedLayouts = orderBy(testLayouts, 'start');

		const { id, start, width} = orderedLayouts[0];
	
		setLayouts(orderBy(testLayouts, 'start'));
		setCurrentLayoutId(id);
		setRange([start, width]);
	}, [])

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

	const onDeleteSection = () => {
		let deletedLayout: LayoutType | null = null;

		const newLayouts = compact(
			map(layouts, (layout) => {
				if (currentLayoutId === layout.id) {
					deletedLayout = layout;
					return;
				}

				if (deletedLayout) {
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

		console.log({ newLayouts });


		const currentLayout = newLayouts[0];
		setCurrentLayoutId(currentLayout.id)
		setRange([currentLayout.start, currentLayout.width])
		setLayouts(newLayouts);
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
					<Grid size={width} sx={{
						transition: "transform 0.15s ease-in-out",
					}}>
						{currentLayoutId === id && (
							<Grid
								container
								alignItems="center"
								justifyContent="end"
							>
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
					{map(layouts, (layout: LayoutType) => (
						<Layout
							isCurrentLayout={layout.id === currentLayoutId}
							layout={layout} 
							onClickLayout={onClickSection}
						/>
					))}
				</Grid>
			</Paper>
		</div>
  );
}