"use client"

import React, { Fragment, useContext } from 'react';

import { Divider, Grid, IconButton } from '@mui/material'; 
import { AddBox, Check, DisabledByDefault, Settings } from '@mui/icons-material';
import { ScreenContext } from '@/app/context';

import SectionButton from '@/components/client/SectionButton';



const CustomizationModeButtons = () => {
	const { isCustomizing, setIsCustomizing, selectedSection } = useContext(ScreenContext);

	return (
		<Grid container>
			{isCustomizing && (
				<Fragment>
					<SectionButton sectionAction="ADD" />
	
					<IconButton disabled onClick={() => {}}>
						<AddBox />
					</IconButton>

					<Divider orientation="vertical" variant="middle" flexItem />

					<SectionButton
						disabled={!selectedSection}
						sectionAction="DELETE"
					/>

					<IconButton disabled color="error" onClick={() => {}}>
						<DisabledByDefault />
					</IconButton>
					<Divider orientation="vertical" variant="middle" flexItem />
				</Fragment>
			)}
			
			<IconButton onClick={() => setIsCustomizing(!isCustomizing)}>
				{isCustomizing ? <Check /> : <Settings />}
			</IconButton>
		</Grid>
	)
}

export default CustomizationModeButtons;
