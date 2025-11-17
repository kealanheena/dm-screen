"use client"

import React, { useContext, useState } from 'react';
import { find, map }  from 'lodash';

import { Grid, Slider } from '@mui/material';
import { DMScreenType, SectionType } from '@/types';

import { ScreenContext } from '@/app/context';
// import onChangeSection from "@/utils/onChangeSection";

import Section from '../../../../components/section';
import onChangeSection from '@/utils/onChangeSection';


interface FullDMScreenType extends DMScreenType {
	sections: SectionType[];
}

interface ScreenProps {
	screen: FullDMScreenType;
}

export default function Screen({ screen: initialScreen }: ScreenProps) {
	const [screen, setScreen] = useState<FullDMScreenType>(initialScreen);
	const {
		isCustomizing,
		selectedSection,
		setSelectedSection
	} = useContext(ScreenContext);
	
	
	const handleSliderChange = (_: Event, newRange: number[]) => {
		if (!selectedSection) {
			return;
		}

		const { sections } = screen;
		const { id, start, width } = selectedSection

		const newSections = onChangeSection({
			layoutId: id,
			layouts: sections,
			newRange,
			range: [start, start + width]
		});

		if (!newSections) {
			return;
		}

		const newSelectedSection = find(newSections, ['id', id])

		setScreen({
			...screen,
			sections: newSections,
		});
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
