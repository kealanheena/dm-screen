"use client"

import React from 'react';
import { head }  from 'lodash';

import { Box } from '@mui/material';
import { Layout } from '@/types';

// import Blocks from './Blocks';
// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
import CreateScreen from './Create';


interface ScreenProps {
	screens: Layout[];
}

export default function Screen({ screens }: ScreenProps) {

	return (
		<Box sx={{ p: 2, height: '100%' }}>	
			{head(screens) ? (
				<div/>
			) : <CreateScreen />}
		</Box>
	);
}
