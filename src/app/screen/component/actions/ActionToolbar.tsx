"use client"

import React, { useState, Fragment } from 'react';
import { compact, find, head, map, get }  from 'lodash';

import {
	Box,
	Divider,
	Grid,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Slider,
} from '@mui/material';
import { Layout } from '@/types';
import { Add } from '@mui/icons-material';

import IconButton from '@/components/IconButton';
import TitleDialog from '@/components/TitleDialog';


interface ScreenActionsProps {
	screens: Layout[];
}

export default function ScreenActions({ screens }: ScreenActionsProps) {
	const [selectedLayout, setSelectedLayout] = useState<Layout | undefined>(head(screens));
	const [isCustomizing, setIsCustomizing] = useState(false);
	

	const handleChange = (event: SelectChangeEvent<number>) => {
		const newLayoutId = event.target.value;
		if (newLayoutId) {
			return;
		}

		const newLayout: Layout | undefined = find(screens, ['id', newLayoutId]);
		if (!newLayout) {
			// Add toast notification
			return;
		}

		setSelectedLayout(newLayout);
	};

	const handleCreateClick = () => {};

	const handleCustomizeClick = () =>  setIsCustomizing(!isCustomizing);

	return (
		<Box sx={{ pl: 2, pt: 2, pr: 2 }}>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
			>
				<div>
					<FormControl>
						<InputLabel id="current-dm-screen-label">Current dm screen</InputLabel>
						<Select
							labelId="current-dm-screen-label"
							id="dm-screen-select"
							label="Current dm screen"
							value={get(selectedLayout, 'id', 0)}
							onChange={handleChange}
						>
							<MenuItem disabled value={0}><em>Choose a dm screen</em></MenuItem>

							{map(compact(screens), ({ id, title }) => (
								<MenuItem
									key={`dm_screen_select_${id}`}
									value={id}
								>
									{title}
								</MenuItem>
							))}

							<MenuItem onClick={handleCreateClick}>
								<Add sx={{ pr: 1, fontSize: 30 }} />
								Create screen
							</MenuItem>
						</Select>
					</FormControl>

					{selectedLayout?.id && (
						<TitleDialog id={selectedLayout.id} title={selectedLayout.title} />
					)}
				</div>

				{selectedLayout && (
					<Grid container>
						{isCustomizing && (
							<Fragment>
								<IconButton
									icon="ADD"
									onClick={() => {}} 
									variant="icon_only"
									tooltip="Add section"
								/>

								<IconButton
									icon="DELETE"
									onClick={() => {}} 
									variant="icon_only"
									tooltip="Delete section"
								/>
							</Fragment>
						)}

						<IconButton
							icon="ADD"
							onClick={() => {}} 
							variant="icon_only"
							tooltip="Add section"
						/>

						<IconButton
							icon="DELETE"
							onClick={() => {}} 
							variant="icon_only"
							tooltip="Delete section"
						/>

						<Divider orientation="vertical" variant="middle" flexItem />
						
						<IconButton
							icon={isCustomizing ? 'CHECK' : 'SETTINGS'}
							onClick={handleCustomizeClick} 
							variant="icon_only"
							tooltip={isCustomizing ? 'Finish changes' : 'Start changing'}
						/>
					</Grid>
				)}
				
			</Grid>

			{isCustomizing && (
				<Slider
					value={[0, 0]}
					min={0}
					max={12}
					marks
					aria-label="width slider"
					valueLabelDisplay="auto"
					onChange={() => {}}
				/>
			)}
		</Box>
	);
}
