"use client"

import React, { useEffect, useState } from 'react';
import { find, map }  from 'lodash';
import { redirect, RedirectType, useParams } from 'next/navigation'

import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { Add } from '@mui/icons-material';

import { DMScreenType } from '@/types';


interface SelectScreen {
	screens: Pick<DMScreenType, "id" | "title">[];
}

const SelectScreen = ({ screens }: SelectScreen) => {
	const { id } = useParams();


	return (
		<FormControl>
			<InputLabel id="current-dm-screen-label">Current dm screen</InputLabel>
			<Select
				labelId="current-dm-screen-label"
				id="dm-screen-select"
				label="Current dm screen"
				value={id}
				onChange={(event) => redirect(`${event.target.value}`, RedirectType.replace)}
				sx={{ p: 0 }}
			>
				<MenuItem disabled><em>Choose a dm screen</em></MenuItem>

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
