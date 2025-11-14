"use client"

import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';

import { Divider, Grid, IconButton } from '@mui/material'; 
import { AddBox, DisabledByDefault, Settings } from '@mui/icons-material';
import SectionButton from '@/components/SectionButton';
import { useParams } from 'next/navigation';


const CustomizationModeButtons = () => {
	const [isCustomizing, setIsCustomizing] = useState(false);

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
				<Settings />
			</IconButton>
		</Grid>
	)
}

export default CustomizationModeButtons;
