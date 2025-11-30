"use client"

import React, { useState } from 'react';

import { map } from 'lodash';

import ModifierScore from './ModifierScore';
import Profiency from './Profiency';

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

	const abilityModifier = Math.floor((ability.score -10)/2);

	const handleRadioClick = (targetId: number | null, type = 'skills') => () => {
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
		<div
			style={{
				borderColor: ability.color,
				padding: '4px',
				fontSize: '1rem',
			}}
			>
			<div
				className="box"
				style={{
					borderColor: ability.color,
					padding: '4px',
					fontSize: '1rem',
				}}
			>
				<div
					className="box-inner"
					style={{
						borderColor: ability.color,
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<p>{ability.name}</p>

					<ModifierScore ability={ability} />
					
					<hr />

					<div style={{ display: 'flex' }}>
						<label>
							<input
								type="radio"
								onClick={handleRadioClick(null, 'save')}
								checked={ability.savingThrow.isProficient}
							/>
							{ability.savingThrow.isProficient
								? abilityModifier + Profiency
								: abilityModifier
							}
						</label>
						<p>Saving Throw</p>
					</div>

					<hr />

					{map(ability.skills, ({ id, name, isProficient }) => (
						<div style={{ display: 'flex' }}>
							<label>
								<input
									type="radio"
									onClick={handleRadioClick(id)}
									checked={isProficient}
								/>
								{isProficient
									? abilityModifier + Profiency
									: abilityModifier
								}
							</label>
							<p>{name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
};

export default AbilityCard;