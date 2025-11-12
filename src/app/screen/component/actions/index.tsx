"use client"

import React, { Fragment, useContext } from 'react';
import { compact, map, get }  from 'lodash';
import { useRouter } from 'next/navigation';

import {
	Box,
	Divider,
	Grid,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Slider,
} from '@mui/material';
import { Add } from '@mui/icons-material';

import IconButton from '@/components/IconButton';
import TitleDialog from './TitleDialog';
import { createSection, deleteSection } from '@/actions/section.action';
import { ScreenContext } from '@/app/context';

interface ScreenActionsProps {
	handleChangeScreen: any; // TODO: find our what type this shoud be?
	toggleIsCutomizing: React.MouseEventHandler<HTMLButtonElement>;
}
export default function ScreenActions({ 
	handleChangeScreen,
	toggleIsCutomizing
}: ScreenActionsProps) {
	const { refresh } = useRouter();
	const context = useContext(ScreenContext);

	const screens = get(context, 'screens');
	const currentScreen = get(context, 'currentScreen');
	const { start, width } = get(context, 'currentSection', { start: 0, width: 0 });
	const isCustomizing = get(context, 'isCustomizing');

	const handleCreateSectionClick = async () => {
		if (!currentScreen) {
			return;
		}

		await createSection(currentScreen.id, { start: 0, width: 12 });

		refresh();
	}

	const handleDeleteSectionClick = async () => {
		if (!currentScreen) {
			return;
		}

		await deleteSection(currentScreen.id);

		refresh();
	}

	return (
		<Box sx={{ pl: 2, pt: 2, pr: 2 }}>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
			>
				<div>
					<FormControl>
						<InputLabel id="current-dm-screen-label">Current dm screen</InputLabel>
						<Select
							labelId="current-dm-screen-label"
							id="dm-screen-select"
							label="Current dm screen"
							value={get(currentScreen, 'id', 0)}
							onChange={handleChangeScreen}
							sx={{ p: 0 }}
						>
							<MenuItem disabled value={0}><em>Choose a dm screen</em></MenuItem>

							{map(compact(screens), ({ id, title }) => (
								<MenuItem
									key={`dm_screen_select_${id}`}
									value={id}
								>
									{title}
								</MenuItem>
							))}

							<MenuItem onClick={() => {}}>
								<Add sx={{ pr: 1, fontSize: 30 }} />
								Create screen
							</MenuItem>
						</Select>
					</FormControl>

					{currentScreen?.id && (
						<TitleDialog id={currentScreen.id} title={currentScreen.title} />
					)}
				</div>

				{currentScreen && (
					<Grid container>
						{isCustomizing && (
							<Fragment>
								{currentScreen?.sections?.length > 0 && (
									<Fragment>
										<IconButton
											icon="ADD_CARD"
											onClick={() => {}} 
											variant="icon_only"
											tooltip="Add card"
										/>

										<Divider orientation="vertical" variant="middle" flexItem />
									</Fragment>
								)}

								<IconButton
									icon="ADD_SECTION"
									onClick={handleCreateSectionClick} 
									variant="icon_only"
									tooltip="Add section"
								/>

								<IconButton
									icon="DELETE_SECTION"
									onClick={handleDeleteSectionClick} 
									variant="icon_only"
									tooltip="Delete section"
								/>

								<Divider orientation="vertical" variant="middle" flexItem />
							</Fragment>
						)}
						
						<IconButton
							icon={isCustomizing ? 'CHECK' : 'SETTINGS'}
							onClick={toggleIsCutomizing} 
							variant="icon_only"
							tooltip={isCustomizing ? 'Finish changes' : 'Start changing'}
						/>
					</Grid>
				)}
				
			</Grid>

			{isCustomizing && (
				<Slider
					value={[start, width]}
					min={0}
					max={12}
					marks
					aria-label="width slider"
					valueLabelDisplay="auto"
					onChange={() => {}}
				/>
			)}
		</Box>
	);
}
