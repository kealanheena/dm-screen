import React, { Fragment } from "react";
import { Box, CircularProgress } from '@mui/material';

import { getScreens } from "@/actions/screen.action";

import Screen from "./component";


export default async function ScreenPage() {
	const screens = await getScreens();

	return (
		<Fragment>
			{screens ? <Screen screens={screens} /> : (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			)}
			
		</Fragment>
	)
}
