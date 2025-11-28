"use client"

import React, { Fragment, useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import SpeciesSelect from './SpeciesSelect';
import ClassSelect from './ClassSelect';


export default function PlayerCharacterFormDialog() {
	const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

	const handleClose = () => setOpen(false);

	const handleOpen = () => setOpen(true);
	

	return (
		<Fragment>
			<IconButton onClick={handleOpen}> 
				<Add />
			</IconButton>

			<Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create player character</DialogTitle>
  
        <DialogContent>
          <DialogContentText>
            Create a player character ...
          </DialogContentText>

          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <ClassSelect /> 
    
          <SpeciesSelect /> 
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained">Create</Button>
        </DialogActions>
      </Dialog>
		</Fragment>
	);
}
