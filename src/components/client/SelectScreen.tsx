"use client"

import React, { useState, MouseEventHandler } from 'react';
import { find, map }  from 'lodash';
import { redirect, RedirectType, useParams, useRouter } from 'next/navigation'

import {
	ClickAwayListener,
	FormControl,
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

	const screen = find(screens, ['id', Number(id)]);

	const [isEditing, setIsEditing] = useState(false);
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

	const handleIsEditingOpen = () => setIsEditing(true);

	const handleIsEditingClose = () => {
		if (isEditing && screen) {
			setName(screen.name);
			setPreviousName(screen.name);
		}

		setIsEditing(false);
	}

	const handleCancel = async () => {
		setName(previousName);

		await debounce(previousName);

		setIsEditing(false);
	}

	return (
		<ClickAwayListener onClickAway={handleIsEditingClose}>
			<div>
				<FormControl>
					<InputLabel id="dm-screen-label">
						{isEditing ? 'New name' : 'Current dm screen'}
					</InputLabel>
					
					{isEditing ? (
							<Tooltip title="Make your changes here" arrow open>
								<TextField
									autoFocus
									focused
									fullWidth
									required
									value={name}
									label="New name"
									onChange={handleNameChange}
									slotProps={{
										input: { 
											endAdornment: <TextFieldEndAdornment onClick={handleCancel} />,
										}
									}}
								/>
							</Tooltip>
					): (
							<Select
								labelId="dm-screen-label"
								label="Current dm screen"
								value={id}
								onChange={(event) => redirect(`${event.target.value}`, RedirectType.replace)}
								sx={{ p: 0 }}
							>
								<MenuItem disabled><em>Choose a dm screen</em></MenuItem>

								{map(screens, ({ id, name }) => (
									<MenuItem key={`screen_${id}`} value={id}>{name}</MenuItem>
								))}
							</Select>
						)}
				</FormControl>

				{screen && (
					<Tooltip title={isEditing ? 'Save' : 'Edit'}>
						<IconButton disabled={!name} onClick={isEditing ? handleIsEditingClose : handleIsEditingOpen}>
							{isEditing ? <Check /> : <Edit />}
						</IconButton>
					</Tooltip>
				)}
			</div>
		</ClickAwayListener>
	);
}

export default SelectScreen;
