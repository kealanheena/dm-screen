import React from "react";

import { getCampaigns } from "@/actions/campaign.action";

import { Card, CardContent, Typography } from '@mui/material';

import List from "@/components/client/List";


export default async function Campaigns() {
  const campaigns = await getCampaigns() || [];

  return (
		<Card sx={{ height: '50%'}}>
			<CardContent>
				<Typography variant="h5">Campaigns</Typography>

				<List items={campaigns} itemKey="campaign"/>
			</CardContent>
		</Card>
  );
}
