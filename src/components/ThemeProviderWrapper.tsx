"use client"

import React from 'react';

import { Toaster } from "react-hot-toast";

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles";

import { themeOptions } from '../app/theme';


import Navbar from "@/components/Navbar";


function ThemeProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const theme = createTheme(themeOptions);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline /> 
				{children}
			<Toaster />
		</ThemeProvider>
	)
}

export default ThemeProviderWrapper;