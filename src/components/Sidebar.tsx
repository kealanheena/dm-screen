import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

import SidebarUnAuthenticatedUser from './SidebarUnauthenticaredUser';
import { getUserByClerkId } from '@/actions/user.action';

async function sidebar() {
	const authUser = await currentUser();
	console.log(authUser)

	if (!authUser) {
		return (
			<SidebarUnAuthenticatedUser />
		)
	}

	const user = await getUserByClerkId(authUser.id)
	console.log(user)

	if (!user) {
		return null;
	}

	return (
		<div>sidebar</div>
	)
}

export default sidebar