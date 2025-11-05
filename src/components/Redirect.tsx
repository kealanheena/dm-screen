"use client"

import React, { Fragment } from 'react';
import { includes } from 'lodash';
import { redirect, RedirectType, usePathname } from 'next/navigation';

import { ACCESSABLEPATHSWITHOUTLOGIN } from '@/constants';
import { User } from '@clerk/nextjs/server';

type RedirectProps = {
	user: User | null;
}

function Redirect({ user }: RedirectProps) {
	const pathname = usePathname();
	const isPageAccessable = (
		user || includes(ACCESSABLEPATHSWITHOUTLOGIN, pathname)
	);

	if (!isPageAccessable) {
		redirect('/log-in', RedirectType.replace)
	}

	return <Fragment />;
}

export default Redirect;