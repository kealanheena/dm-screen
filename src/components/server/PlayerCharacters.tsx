import React from "react";

import { getPlayerCharacters } from "@/actions/playerCharacter.action";

import { Card, CardContent, Typography } from '@mui/material';

import List from "@/components/client/List";


export default async function PlayerCharacters() {
  const playerCharacter = await getPlayerCharacters() || [];

  return (
		<Card sx={{ height: '100%'}}>
			<CardContent>
				<Typography variant="h6">Player characters</Typography>

				<List items={playerCharacter} itemKey="playerCharacter"/>
			</CardContent>
		</Card>
  );
}
