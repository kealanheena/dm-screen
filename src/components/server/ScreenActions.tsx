import React from 'react';
import { find } from 'lodash';

import { getScreens } from '@/actions/screen.action';
import { Grid } from '@mui/material'; 

import { DMScreenType } from '@/types';

import SelectScreen from '@/components/client/SelectScreen';
import CustomizeModeButtons from '@/components/client/CustomizationModeButtons';


interface ScreenActionsPageProps {
	id: number;
	campaignId?: number;
}

const emptyScreen = { id: 0, name: '' }

const ScreenActions = async ({ id, campaignId }: ScreenActionsPageProps) => {
	const screens: Pick<DMScreenType, "id" | "name">[] = await getScreens({ campaignId });
	const screen: Pick<DMScreenType, "id" | "name"> = find(screens, ['id', id]) || emptyScreen;

	return (
		<Grid
			container
			flexDirection="row"
			sx={{ pl: 2, pt: 2, pr: 2 }}
		>
			<SelectScreen screens={screens} />

			{screen && (
				<CustomizeModeButtons />
			)}
		</Grid>
	)
}

export default ScreenActions;
