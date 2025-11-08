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

import { BASE_LAYOUT } from '@/constants';

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
				<Grid spacing={9}>
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
					<Grid spacing={3}>
						test
					</Grid>
				)}
			</Grid>
			{currentLayout && (
				<Blocks blocks={currentLayout.blocks} />
			)}
		</Box>
	);
}

export function Blocks({ blocks }) {
	const [currentBlocks, setCurrentBlocks] = useState(blocks);
	const [currentBlock, setCurrentBlock] = useState();
	const [range, setRange] = useState<number[]>([])

	useEffect(() => {
		const orderedBlocks = orderBy(blocks, 'blocks.start');

		if (blocks) {
			console.log(orderedBlocks)
			const firstBlock = head(orderedBlocks);
			const { start, width } = firstBlock;

	
			setCurrentBlocks(orderBy(blocks, 'start'));
			setCurrentBlock(firstBlock);
			setRange([start, width]);
		}
	}, [])

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onChangeLayout = (e: any): void => {
		// const layout: Layout | undefined = find(layouts, ['id', currentLayoutId]);

		if (!currentBlock) {
			return;
		}

		const newRange: number[] = map(e.target.value, (value: string) => Number(value));

		const newBlocks = onChangeSection({
			layoutId: currentBlock?.id,
			layouts: currentBlocks,
			newRange,
			range,
		});

		if (!newBlocks) {
			return;
		}

		const newBlock = find(newBlocks, ['id', currentBlock?.id]);

		if (!newBlock) {
			return;
		}

		const { start, width } = newBlock;

		setCurrentBlocks(newBlock)
		setRange([start, start + width]);
	};

	const onClickSection = (id: number) => () => {
		setCurrentBlock(find(currentBlocks, ['id', id]));
	
		const block = find(currentBlocks, ['id', id]);

		if (!block) {
			return;
		}

		const { start, width } = block;
		setRange([start, start + width]);
	}

	const onAddSection = () => {
		const maxIdLayout = max(block, ({ id }: Layout) => id);

		const newBlocks = {
			id: (maxIdLayout?.id || 1) +1,
			...BASE_LAYOUT,
		}

		setCurrentBlocks(newBlocks);
	};

	const onDeleteSection = () => {
		let deletedBlock = null;

		const newBlocks = compact(
			map(currentBlocks, (layout) => {
				if (currentBlock?.id === layout.id) {
					deletedBlock = layout;
					return;
				}

				if (deletedBlock && layout.width > 2) {
					const newLayout = {
						...layout,
						width: layout.width + deletedBlock.width,
						start: deletedBlock.start
					};

					deletedBlock = null;

					return newLayout;
				}

				return layout;

			})
		);

		const newBlock = newBlocks[0];

		if (currentBlock) {
			setCurrentBlocks(newBlocks)
			setRange([currentBlock.start, currentBlock.width])
			setCurrentBlock(newBlock);
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
				{map(currentBlocks, ({ id, width }) => (
					<Grid
						key={id}
						size={width}
						sx={{ transition: "transform 0.15s ease-in-out" }}
					>
						{currentBlock?.id === id && (
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
					{map(currentBlocks, (block) => (
						<Block
							key={block.id}
							isCurrentLayout={block.id === currentBlock?.id}
							layout={block} 
							onClickLayout={onClickSection}
						/>
					))}
				</Grid>
			</Paper>
		</div>
  );
}