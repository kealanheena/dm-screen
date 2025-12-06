"use client"

import React, { Fragment, useContext } from 'react';

import { Divider, Grid, IconButton, Tooltip } from '@mui/material'; 
import { Add, LockOpen, LockOutline } from '@mui/icons-material';
import { ScreenContext } from '@/app/context';


const CustomizationModeButtons = () => {
	const { isCustomizing, setIsCustomizing } = useContext(ScreenContext);

	return (
		<Fragment>
			<Tooltip title={isCustomizing ? 'Lock screen' : 'Unlock screen'}>
				<IconButton onClick={() => setIsCustomizing(!isCustomizing)}>
					{isCustomizing ? <LockOpen /> : <LockOutline />}
				</IconButton>
			</Tooltip>

			<Divider orientation="vertical" variant="middle" flexItem={isCustomizing} />

			{isCustomizing && (
				<Tooltip title="Create new card">
					<IconButton onClick={() => {}}>
						<Add />
					</IconButton>
				</Tooltip>
			)}
		</Fragment>
	)
}

export default CustomizationModeButtons;
