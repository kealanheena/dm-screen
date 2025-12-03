"use client"

import React from 'react';

import Profiency from './Profiency';

interface AbilityCardProps {
	score: number;
	isProficient: boolean;
}

const SavingThrow = ({ score, isProficient }: AbilityCardProps) => {
	const abilityModifier = Math.floor((score -10)/2);
	const savingThrowModifier = isProficient ? abilityModifier + Profiency : abilityModifier;
	

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<label>
				<input
					type="radio"
					// checked={isProficient}
					style={{ paddingRight: '1rem', height: '0.75rem', width: '0.75rem' }}
				/>
			</label>
			<p style={{ fontSize: '0.85rem', padding: '0 1rem' }}>{savingThrowModifier}</p>
			<p style={{ fontSize: '0.75rem', fontWeight: 700 }} >Saving Throw</p>
		</div>
	)
};

export default SavingThrow;