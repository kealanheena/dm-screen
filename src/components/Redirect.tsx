"use client"

import React from 'react';
import { includes } from 'lodash';
import { redirect, RedirectType, usePathname } from 'next/navigation';

import { ACCESSABLEPATHSWITHOUTLOGIN } from '@/constants';
import { User } from '@clerk/nextjs/server';



function Redirect({ user }: { user: User }) {
	const pathname = usePathname();
	const isPageAccessable = (
		user || includes(ACCESSABLEPATHSWITHOUTLOGIN, pathname)
	)

	if (!isPageAccessable) {
		redirect('/log-in', RedirectType.replace)
	}
}

export default Redirect;