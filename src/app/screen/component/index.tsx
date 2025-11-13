"use client"

import React, { useState } from 'react';
import { find, head, map }  from 'lodash';

import { Box, Grid, SelectChangeEvent, } from '@mui/material';
import { Screen as ScreenType, Section as SectionType } from '@/types';

// import Blocks from './Blocks';
// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
import CreateScreen from './actions/CreateScreen';
import ScreenActions from './actions';
import { ScreenContext } from '@/app/context';

import Section from './section';


interface ScreenProps {
	screens: ScreenType[];
}

export default function Screen({ screens }: ScreenProps) {
	const [isCustomizing, setIsCustomizing] = useState(false);
	const [currentScreen, setCurrentScreen] = useState<ScreenType | undefined>(
		head(screens)
	);
	const [currentSection, setCurrentSection] = useState<SectionType | undefined>(
		head(head(screens)?.sections)
	);

	const handleChangeScreen = (event: SelectChangeEvent<number>) => {
		if (!isCustomizing) {
			return;
		}

		const currentScreenId = event.target.value;
		if (currentScreenId) {
			// Add toast notification
			return;
		}

		const newScreen: ScreenType | undefined = find(screens, ['id', currentScreenId]);
		if (!newScreen) {
			// Add toast notification
			return;
		}

		setCurrentScreen(newScreen);
		setCurrentSection(head(newScreen.sections));
	};

	const handleChangeSection = (sectionId: number) => () => setCurrentSection(
		find(currentScreen?.sections, ['id', sectionId])
	);

	const toggleIsCutomizing = () => {
		setIsCustomizing(!isCustomizing)
	};
	
	const sx = isCustomizing ? {
		'&:hover': { cursor: 'pointer', p: 0.5 },
		borderColor: '#c4c4c4',
		borderWidth: 2,
		borderRadius: 2,
		borderStyle: 'dashed',
		transition: "transform 0.15s ease-in-out",
		height: '100%'
	} : {
		'&:hover': { cursor: 'pointer' },
		backgroundColor: 'transparent',
		height: '100%'
	};

	const selectedSx = {
		...sx,
		borderStyle: 'solid',
		borderColor: 'primary.main',
	}

	return (
		<ScreenContext.Provider value={{
			screens,
			currentSection,
			currentScreen,
			isCustomizing,
		}}>
			<ScreenActions
				handleChangeScreen={handleChangeScreen}
				toggleIsCutomizing={toggleIsCutomizing}
			/>
			<Grid container sx={{ m: 2 }} >
				{map(currentScreen?.sections || [], (section) => (
						<Grid
							key={section.id}
							size={section.width}
							sx={{ p: 0.5 }}
							onClick={handleChangeSection(section.id)}
						>
							<Box sx={currentSection.id === section.id ? selectedSx : sx}>
								<Section section={section} />
							</Box>	
						</Grid>
				))}
			</Grid>

			{!currentScreen && <CreateScreen />}
		</ScreenContext.Provider>
	);
}
