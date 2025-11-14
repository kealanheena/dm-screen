"use client"

import React, { Fragment, useContext } from 'react';
import { useParams } from 'next/navigation';

import { Divider, Grid, IconButton } from '@mui/material'; 
import { AddBox, Check, DisabledByDefault, Settings } from '@mui/icons-material';
import { ScreenContext } from '@/app/context';

import SectionButton from '@/components/SectionButton';



const CustomizationModeButtons = () => {
	const { isCustomizing, setIsCustomizing } = useContext(ScreenContext);

	const { id } = useParams();

	return (
		<Grid container>
			{isCustomizing && (
				<Fragment>
					<SectionButton type="ADD" />
	
					<IconButton disabled onClick={() => {}}>
						<AddBox />
					</IconButton>

					<Divider orientation="vertical" variant="middle" flexItem />

					<SectionButton type="DELETE" />

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
