import React from "react";
import { map } from "lodash";

import { getCampaigns } from "@/actions/campaign.action";

import { Card, CardContent, Typography, List } from '@mui/material';

import ListItem from "@/components/client/ListItem";


export default async function Campaigns() {
  const campaigns = await getCampaigns() || [];

  return (
		<Card sx={{ height: '100%'}}>
			<CardContent>
				<Typography variant="h5">Campaigns</Typography>
				<List
					sx={{
						width: '100%',
						maxWidth: 360,
						bgcolor: 'background.paper',
						position: 'relative',
						overflow: 'auto',
						maxHeight: 300,
						'& ul': { padding: 0 },
					}}
					subheader={<li />}
				>
					{map(campaigns, (campaign) => (
						<ListItem
							key={`campaigns-${campaign.id}`}
							item={campaign}
						/>
					))}
				</List>
			</CardContent>
		</Card>
  );
}
