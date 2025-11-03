"use client"

import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { WrapperProps } from '@/types';

import { themeOptions } from '../../app/theme';


function ThemeProviderWrapper({
  children,
}: WrapperProps) {
	const theme = createTheme(themeOptions);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline /> 
			{children}
		</ThemeProvider>
	)
}

export default ThemeProviderWrapper;