"use client"

import React, { Fragment } from 'react';
import { includes } from 'lodash';
import { redirect, RedirectType, usePathname } from 'next/navigation';

import { ACCESSABLEPATHSWITHOUTLOGIN } from '@/constants';

type RedirectProps = {
	isUser: boolean;
}

function Redirect({ isUser }: RedirectProps) {
	const pathname = usePathname();
	const isPageAccessable = (
		isUser || includes(ACCESSABLEPATHSWITHOUTLOGIN, pathname)
	);

	if (!isPageAccessable) {
		redirect('/log-in', RedirectType.replace);
	}

	return <Fragment />;
}

export default Redirect;