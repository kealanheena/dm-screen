import React from "react";

import { getScreens } from "@/actions/screen.action";

import { Card, CardContent, Typography } from '@mui/material';

import List from "@/components/client/List";


export default async function Screens() {
  const screens = await getScreens() || [];

  return (
		<Card sx={{ height: '49%'}}>
			<CardContent>
				<Typography variant="h5">Screens</Typography>

				<List items={screens} itemKey="screen"/>
			</CardContent>
		</Card>
  );
}
