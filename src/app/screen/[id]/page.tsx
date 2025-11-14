import React, { Fragment } from "react";
import { Box, CircularProgress } from '@mui/material';

import { getScreenById, getScreens } from "@/actions/screen.action";

import Screen from "./component";
import ScreenActions from "./actions/page";


type ScreenPageProps = {
  params: { id: string };
};

export default async function ScreenPage({ params }: ScreenPageProps) {
	const { id } = await params;
	const screen = await getScreenById(Number(id));

	return (
		<Fragment>

			<ScreenActions id={Number(id)} />
			
			{screen ? (
				<Screen screen={screen} /> 
			) : (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			)}
			
		</Fragment>
	)
}
