import React from "react";
import { map } from "lodash";

import { getScreens } from "@/actions/screen.action";

import { Card, CardContent, Typography } from '@mui/material';

import ListItem from "@/components/client/ListItem";


export default async function Screens() {
  const screens = await getScreens() || [];

  return (
		<Card sx={{ height: '100%'}}>
			<CardContent>
				<Typography variant="h5">Screens</Typography>
				{map(screens, (screen) => (
					<ListItem
						key={`screens-${screen.id}`}
						item={screen}
					/>
				))}
			</CardContent>
		</Card>
  );
}
