import React from 'react'
import { SignIn } from '@clerk/nextjs';
import { Divider, Grid } from '@mui/material';

import ContinueAsGuest from '@/components/client/ContinueAsGuest';


function LogIn() {
	return (
		<Grid
			container
			justifyContent="space-around"
			alignItems="center"
			sx={{ p: 16, pt: 0, pb: 0, height: '100%' }}
		>
			<SignIn />

		 	<Divider sx={{ p: '32px 0'}} variant="middle" orientation="vertical">
				or
			</Divider>

			<ContinueAsGuest/> 
		</Grid>
	)
}

export default LogIn;