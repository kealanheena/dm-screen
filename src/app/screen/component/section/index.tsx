import React, { useContext, useState } from 'react';
import { get } from 'lodash';

import {
	Card,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import { Section as SectionType } from '@/types';
import { ScreenContext } from '@/app/context';

// import LayoutCard from './LayoutCard';


interface SectionProps { 
	section: SectionType;
}

export default function Section({
	section,
}) {
	const context = useContext(ScreenContext);

	const isCustomizing = get(context, 'isCustomizing');

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
		<Grid
			key={section.id}
			size={section.width}
			sx={{ p: 0.5 }}
			onClick={handleChangeSection(section.id)}
		>
			<Box sx={currentSection.id === section.id ? selectedSx : sx}>
				<Card>
					<CardContent>
						<Grid container flexDirection="column">
								<Typography>
									{/* {card.title} */} Test
								</Typography>

							<Grid>
								<Typography>
									Id Example
								</Typography>
							</Grid>
						</Grid>

					</CardContent>
				</Card>
			</Box>
		</Grid>
  );
}
