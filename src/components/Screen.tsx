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

import IconButton from './IconButton';
// import Blocks from './Blocks';
import TitleDialog from './TitleDialog';


interface ScreenProps {
	layouts: Layout[];
}

export default function Screen({ layouts }: ScreenProps) {
	const [selectedLayout, setSelectedLayout] = useState<Layout | undefined>(head(layouts));
	const [isCustomizing, setIsCustomizing] = useState(false);
	

	const handleChange = (event: SelectChangeEvent<number>) => {
		const newLayoutId = event.target.value;
		const newLayout: Layout | undefined = find(layouts, ['id', newLayoutId]);

		if (!newLayout) {
			// Add toast notification
			return;
		}

		setSelectedLayout(newLayout);
	};

	return (
		<Box sx={{ p: 2, height: '100%' }}>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
			>
				<Grid
					container
					alignItems="center"
				>
					<FormControl
						sx={{ m: 1, minWidth: 250 }}
						size="small"
					>
						<InputLabel id="current-dm-screen-label">Current dm screen</InputLabel>
						<Select
							labelId="current-dm-screen-label"
							id="dm-screen-select"
							label="Current dm screen"
							value={get(selectedLayout, 'id', 0)}
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

					{selectedLayout?.id && (
						<TitleDialog id={selectedLayout.id} title={selectedLayout.title} />
					)}
				</Grid>

				{selectedLayout && (
					<Grid>
						<IconButton
							icon="ADD"
							onClick={() => {}} 
							variant="icon_only"
						/>
						<IconButton
							icon={isCustomizing ? 'CHECK' : 'SETTINGS'}
							onClick={() =>  setIsCustomizing(!isCustomizing)} 
							variant="icon_only"
						/>
					</Grid>
				)}
				
			</Grid>
			{/* {selectedLayout && (
				<Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
			)} */}
		</Box>
	);
}
