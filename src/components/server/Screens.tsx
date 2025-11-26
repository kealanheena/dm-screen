import React from "react";

import { getScreens } from "@/actions/screen.action";

import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';

import List from "@/components/client/List";
import { Add, Map } from "@mui/icons-material";


export default async function Screens() {
  const screens = await getScreens() || [];

  return (
		<Card sx={{ height: '49%'}}>
			<CardContent>
				<Grid container justifyContent="space-between">
					<Grid display="flex" alignItems="center">
						<Map color='primary'/>
						<Typography sx={{ pl: 1 }} variant="h6">Screens</Typography>
					</Grid>

					<IconButton> 
						<Add />
					</IconButton>
				</Grid>

				<List items={screens} itemKey="screen"/>
			</CardContent>
		</Card>
  );
}
