"use client"

import React, { useEffect, useState } from 'react';
import { compact, find, map, max, orderBy }  from 'lodash';

import { Grid, IconButton, Paper, Slider } from '@mui/material';
import onChangeSection from '@/utils/onChangeSection'
import { LayoutType } from '@/types';

import Layout from './Layout';
import DeleteButton from './DeleteButton';
import { AddCircleOutlineRounded } from '@mui/icons-material';
import { BASE_LAYOUT } from '@/constants';

const testLayouts: LayoutType[] = [
	{
		id: 3,
		start: 0,
		width: 2,
		cards: [
			{ id: 1, title: 'Test Img Card' },
			{ id: 2, title: 'NPCs Card' }
		],
	},
	{
		id: 3,
		start: 2,
		width: 10,
		cards: [],
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

	const onAddSection = () => {
		const maxIdLayout = max(layouts, ({ id }: LayoutType) => id);

		const newLayout: LayoutType = {
			id: (maxIdLayout?.id || 1) +1,
			...BASE_LAYOUT,
		}
	};

	const onDeleteSection = () => {
		let deletedLayout: LayoutType | null = null;

		const newLayouts: LayoutType[] = compact(
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
			setLayouts(newLayouts);
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
						<Layout
							key={layout.id}
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