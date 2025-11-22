import React from 'react';
import { find } from 'lodash';

import { getScreens } from '@/actions/screen.action';
import { Box, Grid } from '@mui/material'; 

import { DMScreenType } from '@/types';

import SelectScreen from '@/components/client/SelectScreen';
import CustomizeModeButtons from '@/components/client/CustomizationModeButtons';


interface ScreenActionsPageProps {
	id: number;
	campaignId?: number;
}

const emptyScreen = { id: 0, title: '' }

const ScreenActions = async ({ id, campaignId }: ScreenActionsPageProps) => {
	const screens: Pick<DMScreenType, "id" | "title">[] = await getScreens({ campaignId });
	const screen: Pick<DMScreenType, "id" | "title"> = find(screens, ['id', id]) || emptyScreen;

	return (
		<Box sx={{ pl: 2, pt: 2, pr: 2 }}>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
			>
				<SelectScreen screens={screens} />

				{screen && (
					<CustomizeModeButtons />
				)}
			</Grid>
		</Box>
	)
}

export default ScreenActions;
