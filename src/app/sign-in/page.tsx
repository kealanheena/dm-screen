import React from 'react'
import { SignIn } from '@clerk/nextjs';
import { Grid } from '@mui/material';


function SignInPage() {
	return (
		<Grid
			container
			justifyContent="space-around"
			alignItems="center"
			sx={{ height: '100%' }}
		>
		 <SignIn />
		</Grid>
	)
}

export default SignInPage;