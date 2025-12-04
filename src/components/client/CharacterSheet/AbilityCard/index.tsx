"use client"

import React, { useState } from 'react';

import { map } from 'lodash';

import ModifierScore from '../ModifierScore';
import SavingThrow from '../SavingThrow';
import Skill from '../Skill';
import { Divider } from '@mui/material';

// import styled from 'styled-components';
import './styles.css';

interface AbilityType {
	name: string;
	score: number;
	color: string;
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

// const AbilityCardGlow = styled.div`
// 	position: relative;
// 	max-width: 200px;
// 	border-radius: 8px;
// 	// background-color: white;

// 	&::after, &::before {
// 		content: '';
// 		position: absolute;
// 		height: 100%;
// 		width: 100%;
// 		border-radius: 8px;
// 		background-color: ${props => props.color || 'rgba(0, 0, 0, 0.5)'};
// 		top: 50%;
// 		left: 50%;
// 		translate: -50% -50%;
// 		z-index: -1;
// 		padding: -20px
// 	}

// 	&::before {
// 		filter: blur(0.5rem);
// 		opacity: 0.5;
// 	}
// `;

const AbilityCard = ({ ability: initialAbility }: AbilityCardProps) => {
	const [
		ability,
		// setAbility
	] = useState(initialAbility);

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
			{/* <div className='border-container'>
				<div className='corner-top-left' />
				<div className='corner-top-right' />
			</div> */}

			{/* <AbilityCardGlow color={ability.color}> */}
				<div className='modifier-score-container'>
					<div className='border-container'>
						<div className='modifier-score-border-right' />
						<div className='modifier-score-border-left' />
					</div>
					<p>{ability.name}</p>

					<ModifierScore ability={ability} />
				</div>
				
				<Divider />

				<SavingThrow score={ability.score} isProficient={ability.savingThrow.isProficient} />

				<Divider />

				{map(ability.skills, ({ id, name, isProficient }) => (
					<Skill key={id} name={name} score={ability.score} isProficient={isProficient} />
				))}
			{/* </AbilityCardGlow> */}
		</div>
	)
};

export default AbilityCard;