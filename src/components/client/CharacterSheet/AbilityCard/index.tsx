"use client"

import React, { useState } from 'react';

import { map } from 'lodash';

import ModifierScore from '../ModifierScore';
import SavingThrow from '../SavingThrow';
import Skill from '../Skill';
import { Divider } from '@mui/material';

import './styles.css';

interface AbilityType {
	name: string;
	score: number;
	color: 'red' | 'blue' | 'yellow' | 'green' | 'violet' | 'magenta';
	savingThrow: {
		isProficient: boolean;
	}
	skills: {
		id: number;
		name: string;
		isProficient: boolean;
	}[]
}

interface AbilityCardProps {
	ability: AbilityType,
}

const AbilityCard = ({ ability: initialAbility }: AbilityCardProps) => {
	const [ability, setAbility] = useState(initialAbility);

	// const abilityModifier = Math.floor((ability.score -10)/2);

	// const handleRadioClick = (targetId: number | null, type = 'skills') => () => {
	// 	if (type === 'skills') {
	// 			const newSkills =  map(
	// 				ability.skills,
	// 				({ id, isProficient, ...rest }) => ({
	// 					...rest,
	// 					id,
	// 					isProficient: targetId === id 
	// 						? !isProficient : isProficient,
	// 				})
	// 			);

	// 			setAbility({ ...ability, skills: newSkills });
	// 	} else {
	// 		const newSavingThrow = {
	// 			isProficient: !ability.savingThrow.isProficient
	// 		};

	// 		setAbility({ ...ability, savingThrow: newSavingThrow });
	// 	}
	// }

	return (
		<div className='ability-card-container'>
			<p style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: '900' }}>{ability.name}</p>

			<ModifierScore ability={ability} />
			
			<Divider />

			<SavingThrow score={ability.score} isProficient={ability.savingThrow.isProficient} />

			<Divider />

			{map(ability.skills, ({ id, name, isProficient }) => (
				<Skill key={id} name={name} score={ability.score} isProficient={isProficient} />
			))}
		</div>
	)
};

export default AbilityCard;