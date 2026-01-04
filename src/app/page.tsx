import React from "react";

import { Grid } from '@mui/material';

import { getDbUserId } from "@/actions/user.action";

import Campaigns from "@/components/server/Campaigns";
import Screens from '@/components/server/Screens';
import PlayerCharacters from "@/components/server/PlayerCharacters";
import { SignIn } from "@clerk/nextjs";


export default async function Home() {
  const userId = await getDbUserId();

  if (!userId) {
    return (
      <Grid
        style={{ height: '100%' }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <SignIn />
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ p: 2, height: '100%' }}
    >
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
  );
}
