"use client"

import React, { useState } from 'react';
import { compact, head, map, get }  from 'lodash';

import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import { Layout } from '@/types';
import { updateLayout } from '@/actions/layout.action';

import IconButton from './IconButton';
import Blocks from './Blocks';


interface ScreenProps {
	layouts: Layout[];
}

export default function Screen({ layouts }: ScreenProps) {
	const [currentLayout, setCurrentLayout] = useState<Layout | undefined>(head(layouts));
	const [isCustomizing, setIsCustomizing] = useState(false);
	const [title, setTitle] = useState(head(layouts)?.title || '')
	const [open, setOpen] = useState(false);
	

	const handleChange = (e) => setCurrentLayout(e.target.value);

	const handleTitleChange = (e) => setTitle(e.target.value);

	const handleClose = () => setOpen(false)

	const onSave = () => {
		if (currentLayout) {
			updateLayout({
				id: currentLayout.id,
				title,
			});
			handleClose();
		}
	}

	return (
		<Box
			sx={{ p: 2, height: '100%' }}
		>
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
			
					<IconButton
						icon="EDIT"
						onClick={() => setOpen(true)} 
						variant="icon_only"
					/>

					<Dialog
						open={open}
						onClose={handleClose}
						fullWidth
					>
						<DialogTitle>
							Edit title
						</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								fullWidth 
								onChange={handleTitleChange}
								variant="outlined"
								label="Title"
								value={title}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color="secondary">Close</Button>
							<Button onClick={onSave} variant="contained">
								Save
							</Button>
						</DialogActions>
					</Dialog>
				</Grid>

				{currentLayout && (
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
			{currentLayout && (
				<Blocks blocks={currentLayout.blocks} isCustomizing={isCustomizing} />
			)}
		</Box>
	);
}
