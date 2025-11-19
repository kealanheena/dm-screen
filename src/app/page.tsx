import React from "react";
import { flatMap, map } from "lodash";

import { getDbUserId } from "@/actions/user.action";
import { getCampaigns } from "@/actions/campaign.action";
import { getCampaignlessScreens } from "@/actions/screen.action";

import { Card, CardContent, Grid, List, ListSubheader } from '@mui/material';
import { Public } from "@mui/icons-material";

import Campaigns from "@/components/server/Campaigns";



export default async function Home() {
  const userId = await getDbUserId();

  if (!userId) {
    return;
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ p: 2, height: '100%' }}
    >
      <Grid size={4}>
        <Campaigns />
      </Grid>
    </Grid>
  );
}
