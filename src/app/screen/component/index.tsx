"use client"

import React, { useState } from 'react';
import { find, head }  from 'lodash';

import { Box, Paper, SelectChangeEvent, } from '@mui/material';
import { Screen as ScreenType } from '@/types';

// import Blocks from './Blocks';
// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />
import CreateScreen from './actions/CreateScreen';
import ScreenActions from './actions';
import { ScreenContext } from '@/app/context';


interface ScreenProps {
	screens: ScreenType[];
}

export default function Screen({ screens }: ScreenProps) {
	const [isCustomizing, setIsCustomizing] = useState(false);
	const [currentScreen, setCurrentScreen] = useState<ScreenType | undefined>(
		head(screens)
	);

	const handleChangeScreen = (event: SelectChangeEvent<number>) => {
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
	};

	const toggleIsCutomizing = () => setIsCustomizing(!isCustomizing);

	return (
		<ScreenContext.Provider value={{
			screens,
			currentScreen,
			isCustomizing,
		}}>
			<ScreenActions
				handleChangeScreen={handleChangeScreen}
				toggleIsCutomizing={toggleIsCutomizing}
			/>

			<Box sx={{ p: 2, height: '100%' }}>
				{head(screens) ? (
					<Paper
						elevation={1}
						style={{
							border: '2px #D4D4D4 dashed',
							backgroundColor: 'transparent',
							height: '100%',
						}}
					>
						test
					</Paper>
				) : <CreateScreen />}
			</Box>
		</ScreenContext.Provider>
	);
}
