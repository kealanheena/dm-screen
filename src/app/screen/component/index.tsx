"use client"

import React, { useState } from 'react';
import { head }  from 'lodash';

import { Box } from '@mui/material';
import { Layout } from '@/types';

// import Blocks from './Blocks';
import CreateScreen from './Create';


interface ScreenProps {
	screens: Layout[];
}

export default function Screen({ screens }: ScreenProps) {
	const [selectedLayout, setSelectedLayout] = useState<Layout | undefined>(head(screens));

	return (
		<Box sx={{ p: 2, height: '100%' }}>	
			{selectedLayout ? (
				<div/>
			) : <CreateScreen />}
		</Box>
	);
}

// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
