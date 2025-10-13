import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

import SidebarUnAuthenticatedUser from './SidebarUnauthenticaredUser';

async function sidebar() {
	const authUser = await currentUser();
	console.log(authUser)

	if (!authUser) {
		return (
			<SidebarUnAuthenticatedUser />
		)
	}

	return (
		<div>sidebar</div>
	)
}

export default sidebar