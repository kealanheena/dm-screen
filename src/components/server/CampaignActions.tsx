import React from 'react';
import { find } from 'lodash';

import { Box, Grid } from '@mui/material'; 

import { CampaignType } from '@/types';

import SelectScreen from '@/components/client/SelectScreen';
import CustomizeModeButtons from '@/components/client/CustomizationModeButtons';
import { getCampaigns } from '@/actions/campaign.action';


interface CampaignActionsPageProps {
	id: number;
}

const emptyCampaign = { id: 0, title: '' }

const CampaignActions = async ({ id }: CampaignActionsPageProps) => {
	const campaigns: Pick<CampaignType, "id" | "title">[] = await getCampaigns() || [];
	const campaign: Pick<CampaignType, "id" | "title"> = find(campaigns, ['id', id]) || emptyCampaign;

	return (
		<Box sx={{ pl: 2, pt: 2, pr: 2 }}>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
			>
				<SelectScreen screens={campaigns} />

				{campaign && (
					<CustomizeModeButtons />
				)}
			</Grid>
		</Box>
	)
}

export default CampaignActions;
