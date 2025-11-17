"use client"

import React, { Fragment } from 'react';
import { includes } from 'lodash';
import { redirect, RedirectType, usePathname } from 'next/navigation';

import { ACCESSABLE_PATHS_WITHOUT_LOGIN } from '@/constants';

type RedirectProps = {
	isUser: boolean;
}

function Redirect({ isUser }: RedirectProps) {
	const pathname = usePathname();
	const isPageAccessable = (
		isUser || includes(ACCESSABLE_PATHS_WITHOUT_LOGIN, pathname)
	);

	if (!isPageAccessable) {
		redirect('/log-in', RedirectType.replace);
	}

	return <Fragment />;
}

export default Redirect;