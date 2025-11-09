import React, { useState } from 'react';

import {
	Button,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { Map } from '@mui/icons-material';


export default function CreateNewScreen() {
	const [title, setTitle] = useState('');
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

	return (
		<Grid 
			container 
			flexDirection="column"
			alignItems="center"
			alignContent="center"
			justifyContent="center"
			sx={{ height: '50%'}} 
		>
			<Map sx={{ fontSize: '5rem'}} color="primary"/>
			<Typography variant="h5" pb={3}>
				Opps! looks like you don't have any screens.
			</Typography>
			
			<TextField
				autoFocus
				onChange={handleChange}
				label="Title"
				value={title}
				sx={{ m: 1 }}
			/>
			<Button variant="contained">
				Create screen
			</Button>
		</Grid>
	);
}

// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
