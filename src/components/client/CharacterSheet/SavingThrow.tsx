"use client"

import React from 'react';

import Profiency from './Profiency';

interface AbilityCardProps {
	score: number;
	isProficent: boolean;
}

const SavingThrow = ({ score, isProficent }: AbilityCardProps) => {
	const abilityModifier = Math.floor((score -10)/2);
	const savingThrowModifier = isProficent ? abilityModifier + Profiency : abilityModifier;
	

	return (
		<div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
			<label>
				<input
					type="radio"
					checked={isProficent}
					style={{ paddingRight: '1rem', height: '0.75rem', width: '0.75rem' }}
				/>
			</label>
			<p style={{ fontSize: '0.85rem' }}>{savingThrowModifier}</p>
			<p style={{ fontSize: '0.75rem', fontWeight: 700 }} >Saving Throw</p>
		</div>
	)
};

export default SavingThrow;