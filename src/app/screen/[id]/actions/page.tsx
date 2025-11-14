import React from 'react';
import { find } from 'lodash';

import { getScreens } from '@/actions/screen.action';
import { Box, Grid } from '@mui/material'; 

import { DMScreenType } from '@/types';

import SelectScreen from './components/SelectScreen';
import CustomizeModeButtons from './components/CustomizationModeButtons';
import EditTitleDialog from './components/EditTitleDialog';


interface ScreenActionsPageProps {
	id: number;
}

const emptyScreen = { id: 0, title: '' }

const ScreenActionsPage = async ({ id }: ScreenActionsPageProps) => {
	const screens: Pick<DMScreenType, "id" | "title">[] = await getScreens();
	const screen: Pick<DMScreenType, "id" | "title"> = find(screens, ['id', id]) || emptyScreen;

	return (
		<Box sx={{ pl: 2, pt: 2, pr: 2 }}>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
			>
				{screen && (
					<div>
						<SelectScreen screens={screens} />
						<EditTitleDialog screen={screen} />
					</div>
				)}

				{screen && (
					<CustomizeModeButtons />
				)}
			</Grid>
		</Box>
	)
}

export default ScreenActionsPage;
