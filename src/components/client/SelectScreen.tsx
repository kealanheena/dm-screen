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
	screens: Pick<DMScreenType, "id" | "title">[];
}

const SelectScreen = ({ screens }: SelectScreen) => {
	const { id } = useParams();
	const { refresh } = useRouter();

	const screen = find(screens, ['id', Number(id)]);

	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(screen?.title || '');
	const [previousTitle, setPreviousTitle] = useState(screen?.title || '');

	const debounce = useDebounce(async (title: string) => {
		await updateScreen(Number(id), { title });
		
		refresh();
	}, 500);

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);

		debounce(event.target.value);
	};

	const handleIsEditingOpen = () => setIsEditing(true);

	const handleIsEditingClose = () => {
		if (isEditing && screen) {
			setTitle(screen.title);
			setPreviousTitle(screen.title);
		}

		setIsEditing(false);
	}

	const handleCancel = async () => {
		setTitle(previousTitle);

		await debounce(previousTitle);

		setIsEditing(false);
	}

	return (
		<ClickAwayListener onClickAway={handleIsEditingClose}>
			<div>
				<FormControl>
					<InputLabel id="dm-screen-label">
						{isEditing ? 'New title' : 'Current dm screen'}
					</InputLabel>
					
					{isEditing ? (
							<Tooltip title="Make your changes here" arrow open>
								<TextField
									autoFocus
									focused
									fullWidth
									required
									value={title}
									label="New title"
									onChange={handleTitleChange}
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

								{map(screens, ({ id, title }) => (
									<MenuItem key={`screen_${id}`} value={id}>{title}</MenuItem>
								))}
							</Select>
						)}
				</FormControl>

				{screen && (
					<Tooltip title={isEditing ? 'Save' : 'Edit'}>
						<IconButton disabled={!title} onClick={isEditing ? handleIsEditingClose : handleIsEditingOpen}>
							{isEditing ? <Check /> : <Edit />}
						</IconButton>
					</Tooltip>
				)}
			</div>
		</ClickAwayListener>
	);
}

export default SelectScreen;
