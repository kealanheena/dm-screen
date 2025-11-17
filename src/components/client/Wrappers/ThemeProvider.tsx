"use client"

import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles";

import { themeOptions } from '@/app/theme';

export type ThemeProviderWapperProps = Readonly<{
	children: React.ReactNode;
}>


function ThemeProviderWrapper({
  children,
}: ThemeProviderWapperProps) {
	const theme = createTheme(themeOptions);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline /> 
			{children}
		</ThemeProvider>
	)
}

export default ThemeProviderWrapper;