"use client"

import React, { Fragment, useContext } from 'react';

import { Divider, IconButton, Tooltip } from '@mui/material'; 
import { Add, LockOpen, LockOutline } from '@mui/icons-material';
import { ScreenContext } from '@/app/context';

import { createCard } from '@/actions/card.action';
import { useParams } from 'next/navigation';


const CustomizationModeButtons = () => {
	const { isCustomizing, setIsCustomizing } = useContext(ScreenContext);
	const { id } = useParams();



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
					<IconButton
						onClick={id ? () => createCard(Number(id)) : () => {}}
					>
						<Add />
					</IconButton>
				</Tooltip>
			)}
		</Fragment>
	)
}

export default CustomizationModeButtons;
