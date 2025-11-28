"use client"

import React, { useState } from 'react';

import { Card, Divider, Grid, Radio, Typography } from '@mui/material';
import { map } from 'lodash';

const ModifierCard = ({ ability: initialAbility, profiency = 2 }) => {
	const [ability, setAbility] = useState(initialAbility);

	const abilityModifier = Math.floor((ability.score -10)/2);

	const handleRadioClick = (targetId, type = 'skills') => () => {
		if (type === 'skills') {
				const newSkills =  map(
					ability.skills,
					({ id, isProficient, ...rest }) => ({
						...rest,
						id,
						isProficient: targetId === id 
							? !isProficient : isProficient,
					})
				);

				setAbility({ ...ability, skills: newSkills });
		} else {
			const newSavingThrow = {
				isProficient: !ability.savingThrow.isProficient
			};

			setAbility({ ...ability, savingThrow: newSavingThrow });
		}
	}

	return (
		<div style={{ padding: '8px' }}>
			<Card sx={{ textAlign: 'center' }}>
				<Typography variant='body1'>{ability.name}</Typography>
				<Grid container justifyContent="center">
					<Grid
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
					>
						<Typography variant='h6'>{abilityModifier}</Typography>
						<Typography>Modifier</Typography>
					</Grid>

					<Grid>
						<Typography>{ability.score}</Typography>
						<Typography>Score</Typography>
					</Grid>
				</Grid>

				<Divider />

				<Grid container>
					<Radio
						checked={ability.savingThrow.isProficient}
						size="small"
						onClick={handleRadioClick(null, 'save')}
					/>
					<Typography variant='caption'>
						{ability.savingThrow.isProficient
							? abilityModifier + profiency
							: abilityModifier
						}
					</Typography>
					<Typography variant='caption'>Saving Throw</Typography>
				</Grid>

				{ability.skills.length !== 0 && (<Divider />)}

				<Grid container display="flex" flexDirection="column" alignItems="flex-start">
					{map(ability.skills, ({ id, name, isProficient }) => (
						<Grid>
							<Radio
								checked={isProficient}
								size="small"
								onClick={handleRadioClick(id)}/>
							<Typography variant='caption'>
								{isProficient
									? abilityModifier + profiency
									: abilityModifier
								}
							</Typography>
							<Typography variant='caption'>{name}</Typography>
						</Grid>
					))}
				</Grid>
			</Card>
		</div>
	)
}


const CharacterSheet = () => {
	const [abilities, setAbilities] = useState([
		{
			name: 'STRENGTH',
			score: 16,
			savingThrow: {
				isProficient: false,
			},
			skills: [{
				id: 1,
				name: 'Athletics',
				isProficient: true,
			}]
		}, {
			name: 'DEXTERITY',
			score: 8,
			savingThrow: {
				isProficient: false,
			},
			skills: [{
				id: 2,
				name: 'Acrobatics',
				isProficient: false,
			}, {
				id: 3,
				name: 'Sleight of Hand',
				isProficient: false,
			}, {
				id: 4,
				name: 'Stealth',
				isProficient: true,
			}]
		}, {
			name: 'CONSTITUTION',
			score: 16,
			savingThrow: {
				isProficient: false,
			},
			skills: []
		}, {
			name: 'INTELLIGENCE',
			score: 16,
			savingThrow: {
				isProficient: true,
			},
			skills: [{
				id: 5,
				name: 'Arcana',
				isProficient: true,
			}, {
				id: 6,
				name: 'History',
				isProficient: false,
			}, {
				id: 7,
				name: 'Investigation',
				isProficient: true,
			}, {
				id: 8,
				name: 'Nature',
				isProficient: false,
			}, {
				id: 9,
				name: 'Religion',
				isProficient: false,
			}]
		}, {
			name: 'WISDOM',
			score: 10,
			savingThrow: {
				isProficient: true,
			},
			skills: [{
				id: 10,
				name: 'Animal Handling',
				isProficient: true,
			}, {
				id: 11,
				name: 'Insight',
				isProficient: false,
			}, {
				id: 12,
				name: 'Medicine',
				isProficient: true,
			}, {
				id: 13,
				name: 'Perception',
				isProficient: false,
			}, {
				id: 14,
				name: 'Survival',
				isProficient: false,
			}]
		}, {
			name: 'CHARISMA',
			score: 14,
			savingThrow: {
				isProficient: false,
			},
			skills: [{
				id: 15,
				name: 'Deception',
				isProficient: true,
			}, {
				id: 16,
				name: 'Intimidation',
				isProficient: false,
			}, {
				id: 17,
				name: 'Performance',
				isProficient: true,
			}, {
				id: 18,
				name: 'Persuasion',
				isProficient: false,
			}]
		}
	]);
	return (
		<Grid container>
			<Grid size={3} display="flex">
				<Grid size={6}>
					<Card>
						<Typography>Profiency Bonus</Typography>
						<Typography variant='h5'>+2</Typography>
					</Card>

					{map(abilities.slice(0, 3), (ability) => <ModifierCard ability={ability} />)}

					<Card>
						<Typography>Heroic Inspiration</Typography>
						<Divider />
						<Radio
							// checked
							size="small"
						/>
					</Card>
				</Grid>

				<Grid size={6}>
					{map(abilities.slice(3, 6), (ability) => <ModifierCard ability={ability} />)}
				</Grid>
			</Grid>

			<Grid size={9}>
				
			</Grid>
		</Grid>
	)
}

export default CharacterSheet;
