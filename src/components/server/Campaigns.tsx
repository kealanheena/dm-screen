import React from "react";

import { getCampaigns } from "@/actions/campaign.action";

import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';

import List from "@/components/client/List";
import { Add, Public } from "@mui/icons-material";


export default async function Campaigns() {
  const campaigns = await getCampaigns() || [];

  return (
		<Card sx={{ height: '49%'}}>
			<CardContent>
				<Grid container justifyContent="space-between">
					<Grid display="flex" alignItems="center">
						<Public color='primary'/>
						<Typography sx={{ pl: 1 }} variant="h6">Campaigns</Typography>
					</Grid>

					<IconButton> 
						<Add />
					</IconButton>
				</Grid>

				<List items={campaigns} itemKey="campaign"/>
			</CardContent>
		</Card>
  );
}
