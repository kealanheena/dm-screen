import React from 'react';

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

const ModifierScore = ({ ability }: { ability: AbilityType }) => (
	<div style={{ display: 'flex' }}>
		<div>
			<p>{Math.floor((ability.score -10)/2)}</p>
			<p>Modifier</p>
		</div>

		<div>
			<p>{ability.score}</p>
			<p>Score</p>
		</div>
	</div>
);

export default ModifierScore;