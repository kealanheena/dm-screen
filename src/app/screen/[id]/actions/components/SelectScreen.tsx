"use client"

import React, { useContext } from 'react';
import { compact, map, get }  from 'lodash';
import { redirect } from 'next/navigation'

import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { Add } from '@mui/icons-material';


interface SelectScreen {
	screen: Screen;
	screens: Screen[];
}

const SelectScreen = ({ screen, screens }: SelectScreen) => {
	// const handleOnClickCreateScreen = () => {};

	return (
		<FormControl>
			<InputLabel id="current-dm-screen-label">Current dm screen</InputLabel>
			<Select
				labelId="current-dm-screen-label"
				id="dm-screen-select"
				label="Current dm screen"
				value={screen.id}
				onChange={(event) => redirect(`screen/${event.target.value}`)}
				sx={{ p: 0 }}
			>
				<MenuItem disabled value={0}><em>Choose a dm screen</em></MenuItem>

				{map(screens, ({ id, title }) => (
					<MenuItem key={`screen_${id}`} value={id}>
						{title}
					</MenuItem>
				))}

				<MenuItem>  {/* add onClick handler for add new screen */}
					<Add sx={{ pr: 1, fontSize: 30 }} />
					Create screen
				</MenuItem>
			</Select>
		</FormControl>
	);
}

export default SelectScreen;
