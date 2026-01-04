import React from "react";

import { Grid } from '@mui/material';

import { getDbUserId } from "@/actions/user.action";

import Campaigns from "@/components/server/Campaigns";
import Screens from '@/components/server/Screens';
import PlayerCharacters from "@/components/server/PlayerCharacters";
import LogIn from "@/components/server/LogIn";


export default async function Home() {
  const userId = await getDbUserId();

  if (!userId) {
    return (
      <LogIn />
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ p: 2, height: '100%' }}
    >
      <Grid size={3}>
        <Grid
          container
          justifyContent="space-between"
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
