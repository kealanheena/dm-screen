"use client"

import React from 'react';
// import { find, map }  from 'lodash';

import { Grid } from '@mui/material';
// import { CampaignType, DMScreenType, FullCampaignType, SectionType } from '@/types';

// import { ScreenContext } from '@/app/context';
// import onChangeSection from "@/utils/onChangeSection";

// import Section from '@/components/client/Section';
// import onChangeSection from '@/utils/onChangeSection';


// interface CampaignPageClientProps {
// 	campaign: FullCampaignType;
// }

export default function CampaignPageClient() {
	// const [campaign, setCampaign] = useState<FullCampaignType>(initialCampaign);
	// const {
	// 	isCustomizing,
	// 	selectedSection,
	// 	setSelectedSection
	// } = useContext(ScreenContext);
	
	
	// const handleSliderChange = (_: Event, newRange: number[]) => {
	// 	if (!selectedSection) {
	// 		return;
	// 	}

	// 	const { sections } = screen;
	// 	const { id } = selectedSection

	// 	const newSections = onChangeSection({
	// 		section: selectedSection,
	// 		layouts: sections,
	// 		newRange,
	// 	});

	// 	if (!newSections) {
	// 		return;
	// 	}

	// 	const newSelectedSection = find(newSections, ['id', id])

	// 	setCampaign({
	// 		...screen,
	// 		sections: newSections,
	// 	});
	// 	setSelectedSection(newSelectedSection);
	// }

	return (
		<Grid container sx={{ m: 2 }} >
			
		</Grid>
	);
}
