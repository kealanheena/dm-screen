import React from "react";

import { getCampaigns } from "@/actions/campaign.action";

import { Card, CardContent, Typography } from '@mui/material';

import List from "@/components/client/List";


export default async function PlayerCharacters() {
  const campaigns = await getCampaigns() || [];

  return (
		<Card sx={{ height: '100%'}}>
			<CardContent>
				<Typography variant="h6">Player characters</Typography>

				<List items={campaigns} itemKey="campaign"/>
			</CardContent>
		</Card>
  );
}
