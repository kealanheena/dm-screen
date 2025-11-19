import React from "react";
import { map } from "lodash";

import { getCampaigns } from "@/actions/campaign.action";

import { Card, CardContent, Typography } from '@mui/material';

import CampaignListItem from "@/components/client/CampaignListItem";


export default async function Campaigns() {
  const campaigns = await getCampaigns() || [];

  return (
		<Card sx={{ height: '100%'}}>
			<CardContent>
				<Typography variant="h5">Campaigns</Typography>
				{map(campaigns, (campaign) => (
					<CampaignListItem
						key={`campaigns-${campaign.id}`}
						campaign={campaign}
					/>
				))}
			</CardContent>
		</Card>
  );
}
