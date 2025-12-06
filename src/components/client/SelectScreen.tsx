"use client"

import React, { useState, MouseEventHandler, Fragment, useContext } from 'react';
import { find, map }  from 'lodash';
import { redirect, RedirectType, useParams, useRouter } from 'next/navigation'

import {
	ClickAwayListener,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Tooltip,
} from '@mui/material';
import { Check, Close, Edit } from '@mui/icons-material';

import { useDebounce } from '@/app/hooks';
import { DMScreenType } from '@/types';
import { updateScreen } from '@/actions/screen.action';
import { ScreenContext } from '@/app/context';


const TextFieldEndAdornment = ({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) => (
	<InputAdornment position="end">
		<Tooltip title="Undo">
			<IconButton onClick={onClick}>
				<Close fontSize="small" />
			</IconButton>
		</Tooltip>
	</InputAdornment>
)

interface SelectScreen {
	screens: Pick<DMScreenType, "id" | "name">[];
}

const SelectScreen = ({ screens }: SelectScreen) => {
	const { id } = useParams();
	const { refresh } = useRouter();
	const { isCustomizing } = useContext(ScreenContext);

	const screen = find(screens, ['id', Number(id)]);

	const [name, setName] = useState(screen?.name || '');
	const [previousName, setPreviousName] = useState(screen?.name || '');

	const debounce = useDebounce(async (name: string) => {
		await updateScreen(Number(id), { name });
		
		refresh();
	}, 500);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);

		debounce(event.target.value);
	};

	if (isCustomizing) {
		return (
			<Tooltip title="Make your changes here" arrow open>
				<TextField
					autoFocus
					focused
					required
					value={name}
					label={isCustomizing ? 'DM screen name' : 'Current DM screen'}
					onChange={handleNameChange}
				/>
			</Tooltip>
		);
	}

	return (
		<TextField
			label="Current dm screen"
			select
			value={id}
			onChange={(event) => redirect(`${event.target.value}`, RedirectType.replace)}
			sx={{ p: 0 }}
		>
			<MenuItem disabled><em>Choose a dm screen</em></MenuItem>

			{map(screens, ({ id, name }) => (
				<MenuItem key={`screen_${id}`} value={id}>{name}</MenuItem>
			))}
		</TextField>
	);
}

export default SelectScreen;
