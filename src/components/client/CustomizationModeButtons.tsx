"use client"

import React, { Fragment, useContext, useState } from 'react';
import { capitalize, map, trim } from 'lodash';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, MenuItem, TextField, Tooltip } from '@mui/material'; 
import { Add, Check, Settings } from '@mui/icons-material';
import { ScreenContext } from '@/app/context';

import { useParams } from 'next/navigation';
import { CardType, ListContentType } from '@prisma/client';
import { createCard } from '@/actions/card.action';


const CustomizationModeButtons = () => {
	const { isCustomizing, setIsCustomizing } = useContext(ScreenContext);
	const { id } = useParams();

	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [type, setType] = useState<string>(CardType.TEXT);
	const [listContent, setListContent] = useState<string | null>(null);

	const handleClose = () => setOpen(false);

	const handleOpen = () => setOpen(true);

	const handleSubmit = async () => {
		await createCard({
			screenId: Number(id),
			title,
			type,
			listContent: type === 'LIST' ? listContent : null,
		});

		setOpen(false);
	}

	return (
		<Grid container>
			{isCustomizing && (
				<Fragment>
					<Tooltip title="Create new card">
						<IconButton
							onClick={handleOpen}
						>
							<Add />
						</IconButton>
					</Tooltip>

					<Divider orientation="vertical" variant="middle" flexItem={isCustomizing} />
				</Fragment>
			)}

			<Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Create card</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose from the options below and create a new card for your DM screen.
          </DialogContentText>
						<br />
            <TextField
              required
              label="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
						
						<br />
						<br />

						<TextField
							select
              required
              label="Type"
							value={type}
							onChange={(e) => setType(e.target.value)}
              fullWidth
            >
							{map(CardType, (value: string) => (
								<MenuItem value={value}>{capitalize(value)}</MenuItem>
							))}
						</TextField>
						
						<br />
						<br />

						{type === 'LIST' && (
							<TextField
								select
								required
								label="List content"
								value={listContent}
								onChange={(e) => setListContent(e.target.value)}
								fullWidth
							>
								{map(ListContentType, (value: string) => (
									<MenuItem value={value}>{capitalize(value)}</MenuItem>
								))}
							</TextField>
						)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
						onClick={handleSubmit}
						variant="contained"
						disabled={!trim(title) || !type}
					>
						Create
					</Button>
        </DialogActions>
      </Dialog>

			<Tooltip title={`${isCustomizing ? 'Disable' : 'Enable'} customize mode`}>
				<IconButton onClick={() => setIsCustomizing(!isCustomizing)}>
					{isCustomizing ? <Check /> : <Settings />}
				</IconButton>
			</Tooltip>
		</Grid>
	)
}

export default CustomizationModeButtons;
