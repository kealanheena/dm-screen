"use client"

import React, { Fragment, useContext } from 'react';

import { Divider, Grid, IconButton } from '@mui/material'; 
import { Check, DisabledByDefault, Settings } from '@mui/icons-material';
import { ScreenContext } from '@/app/context';



const CustomizationModeButtons = () => {
	const { isCustomizing, setIsCustomizing } = useContext(ScreenContext);

	return (
		<Grid container>
			{isCustomizing && (
				<Fragment>
					<IconButton disabled color="error" onClick={() => {}}>
						<DisabledByDefault />
					</IconButton>

					<IconButton disabled color="error" onClick={() => {}}>
						<DisabledByDefault />
					</IconButton>
					<Divider orientation="vertical" variant="middle" flexItem />
				</Fragment>
			)}
			
			<IconButton onClick={() => setIsCustomizing(!isCustomizing)}>
				{isCustomizing ? <Check /> : <Settings />}
			</IconButton>
		</Grid>
	)
}

export default CustomizationModeButtons;
