"use client"

import React, { useState } from 'react';
import { compact, head, map, get }  from 'lodash';

import { Box, Grid, FormControl, InputLabel, MenuItem, Select, IconButton } from '@mui/material';
import { AddCircle, Check, Settings } from '@mui/icons-material';
import { Layout } from '@/types';

import Blocks from './Blocks';


interface ScreenProps {
	layouts: Layout[];
}

export default function Screen({ layouts }: ScreenProps) {
	const [currentLayout, setCurrentLayout] = useState<Layout | undefined>(head(layouts));
	const [isCustomizing, setIsCustomizing] = useState(false);

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
						<IconButton>
							<AddCircle />
						</IconButton>
						<IconButton onClick={() =>  setIsCustomizing(!isCustomizing)}>
							{!isCustomizing ? <Settings/> : <Check />}
						</IconButton>
					</Grid>
				)}
			</Grid>
			{currentLayout && (
				<Blocks blocks={currentLayout.blocks} />
			)}
		</Box>
	);
}
