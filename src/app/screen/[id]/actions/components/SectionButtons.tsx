"use client"

import React, { Fragment, useState } from 'react';

import { Divider, Grid, IconButton } from '@mui/material'; 
import { AddBox, DisabledByDefault, PlaylistAdd, PlaylistRemove, Settings } from '@mui/icons-material';


const SectionButtons = () => {
	const [isCustomizing, setIsCustomizing] = useState(false);

	return (
		<Grid container>
			{isCustomizing && (
				<Fragment>
					<IconButton onClick={() => {}}>
						<PlaylistAdd />
					</IconButton>
	
					<IconButton disabled onClick={() => {}}>
						<AddBox />
					</IconButton>

					<Divider orientation="vertical" variant="middle" flexItem />

					<IconButton color="error" onClick={() => {}}>
						<PlaylistRemove />
					</IconButton>

					<IconButton disabled color="error" onClick={() => {}}>
						<DisabledByDefault />
					</IconButton>
					<Divider orientation="vertical" variant="middle" flexItem />
				</Fragment>
			)}
			
			<IconButton onClick={() => setIsCustomizing(!isCustomizing)}>
				<Settings />
			</IconButton>
		</Grid>
	)
}

export default SectionButtons;
