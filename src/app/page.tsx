import React from "react";

import { Grid } from '@mui/material';

import { getDbUserId } from "@/actions/user.action";

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
