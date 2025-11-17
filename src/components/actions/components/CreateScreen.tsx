"use client"

import React, { useState } from 'react';

import {
	Button,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { Map } from '@mui/icons-material';
import { createScreen } from "@/actions/screen.action";
import { trim } from 'lodash';


export default function CreateNewScreen() {
	const [title, setTitle] = useState('');
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

	const onClickSubmit = async () => {
		if (!trim(title)) {
			return;
		}
		
		await createScreen({ title });
		setTitle('');
	};

	return (
		<Grid 
			container 
			flexDirection="column"
			alignItems="center"
			alignContent="center"
			justifyContent="center"
			sx={{ height: '50%' }} 
		>
			<Map sx={{ fontSize: '5rem' }} color="primary"/>
			<Typography variant="h5" pb={3}>
				{"Opps! looks like you we couldn't find that screen"}
			</Typography>
			
			<TextField
				onChange={handleChange}
				label="Title"
				value={title}
				sx={{ m: 1 }}
			/>
			<Button
				onClick={onClickSubmit}
				disabled={!trim(title)}
				variant="contained"
			>
				Create screen
			</Button>
		</Grid>
	);
}
