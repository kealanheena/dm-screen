import React, { useContext } from 'react';

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
	const { setSelectedSection } = useContext(ScreenContext);

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
									ID: {section.id}
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
