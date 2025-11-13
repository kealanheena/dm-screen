import React, { Fragment } from "react";
import { Box, CircularProgress } from '@mui/material';

import { getScreens } from "@/actions/screen.action";

import Screen from "./component";
import ScreenActions from "./actions/page";


export default async function ScreenPage({ params }) {
	const { id } = await params;

	return (
		<Fragment>

			<ScreenActions id={Number(id)} />
{/* 			
			{screens ? (
				<Screen screens={screens} /> 
			) : (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			)} */}
			
		</Fragment>
	)
}
