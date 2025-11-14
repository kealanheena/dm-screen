"use client"

import React from 'react';
import { map }  from 'lodash';

import { Grid, } from '@mui/material';
import { DMScreenType, SectionType } from '@/types';

// import Blocks from './Blocks';
// <Blocks blocks={selectedLayout.blocks} isCustomizing={isCustomizing} />

import Section from './section';



interface FullDMScreenType extends DMScreenType {
	sections: SectionType[];
}

interface ScreenProps {
	screen: FullDMScreenType;
}

export default function Screen({ screen }: ScreenProps) {

	console.log(screen)

	return (	
		<Grid container sx={{ m: 2 }} >
			{map(screen.sections || [], (section) => <Section key={section.id} section={section} />)} 
		</Grid>
	);
}
