import React from "react";

import { Grid } from '@mui/material';

import { getDbUserId } from "@/actions/user.action";

import Campaigns from "@/components/server/Campaigns";
import Screens from '@/components/server/Screens';


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
        <Grid 
          container
          flexDirection="column"
          sx={{ height: '100%' }}
        >
          <Campaigns />

          <Screens />
        </Grid>
      </Grid>
    </Grid>
  );
}
