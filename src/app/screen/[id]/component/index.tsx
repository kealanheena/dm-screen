"use client"

import React, { useState } from 'react';
import { find, head, map }  from 'lodash';

import { Box, Grid, SelectChangeEvent, } from '@mui/material';
import { Screen as ScreenType, Section as SectionType } from '@/types';

// import Blocks from './Blocks';
// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
import CreateScreen from '../actions/components/CreateScreen';
import ScreenActions from '../actions/ActionsClient';
import { ScreenContext } from '@/app/context';

import Section from './section';


interface ScreenProps {
	screens: ScreenType[];
}

export default function Screen({ screens }: ScreenProps) {
	const [isCustomizing, setIsCustomizing] = useState(false);
	const [currentScreen, setCurrentScreen] = useState<ScreenType>(screens[0]);
	const [currentSection, setCurrentSection] = useState<SectionType>(screens[0]?.sections || [])

	return (
		<ScreenContext.Provider
			value={{
				screens,
				currentSection,
				setCurrentSection,
				currentScreen,
				setCurrentScreen,
				isCustomizing,
				setIsCustomizing,
				}}
		>
			<ScreenActions />
			
			<Grid container sx={{ m: 2 }} >
				{map(currentScreen?.sections || [], (section) => <Section section={section} />)} 
			</Grid>

			{!currentScreen && <CreateScreen />}
		</ScreenContext.Provider>
	);
}
