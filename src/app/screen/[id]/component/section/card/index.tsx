
// import React, { useEffect, useState } from 'react';
// import { compact, find, head, map, max, orderBy }  from 'lodash';

// import { Grid, Paper, Slider } from '@mui/material';
// import onChangeSection from '@/utils/onChangeSection'
// import { Screen } from '@/types';

// import Block from './Screen';

// import { BASE_LAYOUT } from '@/constants';

// export default function Blocks({ blocks, isCustomizing = false }) {
// 	const [currentBlocks, setCurrentBlocks] = useState(blocks);
// 	const [currentBlock, setCurrentBlock] = useState();

// 	useEffect(() => {
// 		const orderedBlocks = orderBy(blocks, 'blocks.start');

// 		if (blocks) {
// 			console.log(orderedBlocks)
// 			const firstBlock = head(orderedBlocks);
// 			const { start, width } = firstBlock;

	
// 			setCurrentBlocks(orderBy(blocks, 'start'));
// 			setCurrentBlock(firstBlock);
// 		}
// 	}, [])

// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const onChangeLayout = (e: any): void => {
// 		// const layout: Screen | undefined = find(layouts, ['id', currentLayoutId]);

// 		if (!currentBlock) {
// 			return;
// 		}

// 		const newRange: number[] = map(e.target.value, (value: string) => Number(value));

// 		const newBlocks = onChangeSection({
// 			layoutId: currentBlock?.id,
// 			layouts: currentBlocks,
// 			newRange,
// 			range: [currentBlock?.start, currentBlock?.width],
// 		});

// 		if (!newBlocks) {
// 			return;
// 		}

// 		const newBlock = find(newBlocks, ['id', currentBlock?.id]);

// 		if (!newBlock) {
// 			return;
// 		}

// 		setCurrentBlocks(newBlock);
// 	};

// 	const onClickSection = (id: number) => () => {
// 		console.log({ id, currentBlock });
// 		setCurrentBlock(find(currentBlocks, ['id', id]));
// 	}

// 	const onAddSection = () => {
// 		const maxIdLayout = max(block, ({ id }: Screen) => id);

// 		const newBlocks = {
// 			id: (maxIdLayout?.id || 1) +1,
// 			...BASE_LAYOUT,
// 		}

// 		setCurrentBlocks(newBlocks);
// 	};

// 	const onDeleteSection = () => {
// 		let deletedBlock = null;

// 		const newBlocks = compact(
// 			map(currentBlocks, (layout) => {
// 				if (currentBlock?.id === layout.id) {
// 					deletedBlock = layout;
// 					return;
// 				}

// 				if (deletedBlock && layout.width > 2) {
// 					const newLayout = {
// 						...layout,
// 						width: layout.width + deletedBlock.width,
// 						start: deletedBlock.start
// 					};

// 					deletedBlock = null;

// 					return newLayout;
// 				}

// 				return layout;

// 			})
// 		);

// 		const newBlock = newBlocks[0];

// 		if (currentBlock) {
// 			setCurrentBlocks(newBlocks)
// 			setCurrentBlock(newBlock);
// 		}

// 	};

// 	const {
// 		start = 0,
// 		width = 0,
// 	} = currentBlock || {}

//   return (
// 		<div style={{ height: '100%' }}>
			
			
			
// 				<Grid container style={{ height: '100%' }}>
// 					{map(currentBlocks, (block) => (
// 						<Block
// 							key={block.id}
// 							isCurrentLayout={block.id === currentBlock?.id}
// 							layout={block} 
// 							onClickLayout={onClickSection}
// 						/>
// 					))}
// 				</Grid>
// 			{/* </Paper> */}
// 		</div>
//   );
// }