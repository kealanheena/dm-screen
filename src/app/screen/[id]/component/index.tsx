"use client"

import React, { useContext } from 'react';
import { map }  from 'lodash';

import { Grid, Slider } from '@mui/material';
import { DMScreenType, SectionType } from '@/types';

import Section from './section';
import { ScreenContext } from '@/app/context';



interface FullDMScreenType extends DMScreenType {
	sections: SectionType[];
}

interface ScreenProps {
	screen: FullDMScreenType;
}

export default function Screen({ screen }: ScreenProps) {
	const {
		isCustomizing,
		selectedSection,
		setSelectedSection
	} = useContext(ScreenContext);
	
	const handleSliderChange = (event) => {
		console.log({ selectedSection })
		if (!selectedSection) {
			return;
		}
		
		const [start, end] = event.target.value;
		const newSelectedSection = {
			...selectedSection,
			start,
			width: end - start,
		}

		setSelectedSection(newSelectedSection);
	}

	return (	
		<Grid container sx={{ m: 2 }} >
			{isCustomizing && selectedSection && (
				<Slider
					value={[
						selectedSection.start,
						selectedSection.start + selectedSection.width,
					]}
					min={0}
					max={12}
					marks
					aria-label="width slider"
					valueLabelDisplay="auto"
					onChange={handleSliderChange}
				/>
			)}

			{map(screen.sections || [], (sectionItem) => {
				const { id } = sectionItem;
				const section = selectedSection && selectedSection.id === id 
					? selectedSection
					: sectionItem;

				return <Section key={`section_${id}`} section={section} />
			})} 
		</Grid>
	);
}
