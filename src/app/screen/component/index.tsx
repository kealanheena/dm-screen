"use client"

import React from 'react';
import { head }  from 'lodash';

import { Box, Paper } from '@mui/material';
import { Layout } from '@/types';

// import Blocks from './Blocks';
// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
import CreateScreen from './actions/CreateScreen';


interface ScreenProps {
	screens: Layout[];
}

export default function Screen({ screens }: ScreenProps) {

	return (
		<Box sx={{ p: 2, height: '100%' }}>	
			{head(screens) ? (
			<Paper
				elevation={1}
				style={{
					border: '2px #D4D4D4 dashed',
					backgroundColor: 'transparent',
					height: '100%',
				}}
			>
				test
			</Paper>
			) : (
			<CreateScreen />
		)}
		</Box>
	);
}
