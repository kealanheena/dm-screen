"use client"

import React, { useContext } from 'react';
import { map }  from 'lodash';

import { Grid, Slider } from '@mui/material';
import { DMScreenType, SectionType } from '@/types';

// import Blocks from './Blocks';
// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />

import Section from './section';
import { ScreenContext } from '@/app/context';



interface FullDMScreenType extends DMScreenType {
	sections: SectionType[];
}

interface ScreenProps {
	screen: FullDMScreenType;
}

export default function Screen({ screen }: ScreenProps) {

	const { isCustomizing } = useContext(ScreenContext);

	return (	
		<Grid container sx={{ m: 2 }} >
			{isCustomizing && (
				<Slider
					value={[0, 0]}
					min={0}
					max={12}
					marks
					aria-label="width slider"
					valueLabelDisplay="auto"
					onChange={() => {}}
				/>
			)}

			{map(screen.sections || [], (section) => <Section key={section.id} section={section} />)} 
		</Grid>
	);
}
