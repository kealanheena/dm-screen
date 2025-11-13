import React from 'react';

import { getScreenById, getScreens } from '@/actions/screen.action';
import { Box, Grid } from '@mui/material'; 

import { Screen } from '@/types';

import SelectScreen from './components/SelectScreen';
import EditTitleDIalog from './components/EditTitleDIalog';

interface ScreenActionsPageProps {
	id: number;
}

const ScreenActionsPage = async ({ id }: ScreenActionsPageProps) => {
	const screen: Screen = await getScreenById(id);
	const screens: Screen[] = await getScreens();

	return (
		<Box sx={{ pl: 2, pt: 2, pr: 2 }}>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
			>
				{screen && (
					<div>
						<SelectScreen screen={screen} screens={screens} />
						<EditTitleDIalog screen={screen} />
					</div>
				)}
			</Grid>
		</Box>
	)
}

export default ScreenActionsPage;
