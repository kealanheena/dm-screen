"use client"

import React, { useState } from 'react';
import { compact, find, head, map, get }  from 'lodash';

import {
	Box,
	Grid,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { Layout } from '@/types';
import { Add } from '@mui/icons-material';

import IconButton from './IconButton';
// import Blocks from './Blocks';
import TitleDialog from './TitleDialog';
import CreateNewScreen from './CreateNewScreen';


interface ScreenProps {
	screens: Layout[];
}

export default function Screen({ screens }: ScreenProps) {
	const [selectedLayout, setSelectedLayout] = useState<Layout | undefined>(head(screens));

	return (
		<Box sx={{ p: 2, height: '100%' }}>	
			{selectedLayout ? (
				<div/>
			) : <CreateNewScreen />}
		</Box>
	);
}

// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
