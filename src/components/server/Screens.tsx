import React from "react";
import { map } from "lodash";

import { getScreens } from "@/actions/screen.action";

import { Card, CardContent, List, Typography } from '@mui/material';

import ListItem from "@/components/client/ListItem";


export default async function Screens() {
  const screens = await getScreens() || [];

  return (
		<Card sx={{ height: '100%'}}>
			<CardContent>
				<Typography variant="h5">Screens</Typography>
				<List
					sx={{
						width: '100%',
						// maxWidth: 360,
						bgcolor: 'background.paper',
						position: 'relative',
						overflow: 'auto',
						maxHeight: 300,
						'& ul': { padding: 0 },
					}}
					subheader={<li />}
				>
					{map(screens, (screen) => (
						<ListItem
							key={`screens-${screen.id}`}
							item={screen}
						/>
					))}
				</List>
			</CardContent>
		</Card>
  );
}
