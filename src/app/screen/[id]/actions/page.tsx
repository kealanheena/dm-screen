import React from 'react';
import { find } from 'lodash';

import { getScreens } from '@/actions/screen.action';
import { Box, Grid } from '@mui/material'; 

import { DMScreenType } from '@/types';

import SelectScreen from './components/SelectScreen';
import EditTitleDIalog from './components/EditTitleDIalog';

interface ScreenActionsPageProps {
	id: number;
}

const emptyScreen = { id: 0, title: '' }

const ScreenActionsPage = async ({ id }: ScreenActionsPageProps) => {
	const screens: DMScreenType[] = await getScreens();
	const screen: DMScreenType = find(screens, ['id', id]) || emptyScreen;

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
