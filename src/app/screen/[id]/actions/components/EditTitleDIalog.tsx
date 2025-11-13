"use client"

import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';

import { updateScreen } from '@/actions/screen.action';
import { DMScreenType } from '@/types';

import IconButton from '@/components/IconButton';


interface EditTitleDialog {
	screen: DMScreenType;
}

export default function EditTitleDIalog({ screen }: EditTitleDialog) {
	const { refresh } = useRouter();

	const [isLoading, setIsLoading] = useState(false);
	const [title, setTitle] = useState(screen.title)
	const [open, setOpen] = useState(false);
	

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const onSave = async () => {
		setIsLoading(true);
	
		try {
			await updateScreen(screen.id, { title });

			refresh();
			handleClose();
		} catch (error) {
			console.error('Error: ', error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Fragment>
			<IconButton
				icon="EDIT"
				onClick={handleOpen} 
				variant="icon_only"
			/>

			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
			>
				<DialogTitle>Edit title</DialogTitle>

				<DialogContent>
					<TextField
						autoFocus
						fullWidth 
						onChange={handleChange}
						variant="outlined"
						label="Title"
						value={title}
					/>
				</DialogContent>

				<DialogActions>
					<Button disabled={isLoading} onClick={handleClose} color="secondary">
						Close
					</Button>

					<Button disabled={isLoading} onClick={onSave} variant="contained">
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
}
