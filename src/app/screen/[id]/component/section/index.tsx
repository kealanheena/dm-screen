import React, { useContext, useState } from 'react';
import { get } from 'lodash';

import {
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import { SectionType } from '@/types';
import { ScreenContext } from '@/app/context';

// import LayoutCard from './LayoutCard';


interface SectionProps { 
	section: SectionType;
}

export default function Section({ section }: SectionProps) {
	const { isCustomizing, selectedSection, setSelectedSection } = useContext(ScreenContext);

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

	const handleChangeSection = () => setSelectedSection(section);
	
	
  return (
		<Grid
			size={section.width}
			sx={{ p: 0.5 }}
		>
			<Box onClick={handleChangeSection}>
				<Card>
					<CardContent>
						<Grid container flexDirection="column">
								<Typography>
									{/* {card.title} */} Test
								</Typography>

							<Grid>
								<Typography>
									Start: {section.start}
								</Typography>
								<Typography>
									Width: {section.width}
								</Typography>
							</Grid>
						</Grid>

					</CardContent>
				</Card>
			</Box>
		</Grid>
  );
}
