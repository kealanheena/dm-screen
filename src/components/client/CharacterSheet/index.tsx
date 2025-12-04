"use client"

import React from 'react';

import { Card, Divider, Grid, Radio, Typography } from '@mui/material';
import { map } from 'lodash';

import AbilityCard from './AbilityCard';

import Abilities from './Abilities';
import Profiency from './Profiency';

import './styles.css'


const CharacterSheet = () => {
	return (
		<Grid container>
			<Grid size={3} display="flex">
				<Grid size={6} display="flex" flexDirection="column">
					<Grid flexGrow={1}>
						<div style={{ padding: '4px' }}>
							<Card>
								<Typography>Profiency Bonus</Typography>
								<Typography variant='h5'>+{Profiency}</Typography>
							</Card>
						</div>
					</Grid>


					{map(Abilities.slice(0, 3), (ability) => (
						<AbilityCard key={ability.name}  ability={ability} />
					))}

					<Grid flexGrow={1}>
						<div style={{ padding: '4px' }}>
							<Card>
								<Typography>Heroic Inspiration</Typography>
								<Divider />
								<Radio
									// checked
									size="small"
								/>
							</Card>
						</div>
					</Grid>
				
				</Grid>

				<Grid size={6}>
					{map(Abilities.slice(3, 6), (ability) =>
					<AbilityCard key={ability.name} ability={ability} />
					)}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default CharacterSheet;
