"use client"

import React from 'react';

import Profiency from './Profiency';


interface Skill {
	name: string;
	score: number;
	isProficient: boolean;
}

const Skill = ({ name, score, isProficient }: Skill) => {
	const abilityModifier = Math.floor((score -10)/2);
	const totalModifier = isProficient ? abilityModifier + Profiency : abilityModifier;


	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<label>
				<input
					type="radio"
					checked={isProficient}
					style={{ paddingRight: '1rem', height: '0.75rem', width: '0.75rem' }}
				/>
			</label>
			<p style={{ fontSize: '0.85rem', padding: '0 1rem' }}>{totalModifier}</p>
			<p style={{ fontSize: '0.75rem' }}>{name}</p>
		</div>
	)
};

export default Skill;