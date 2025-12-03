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

const Modifier = ({ ability }: { ability: AbilityType}) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<div
				style={{
					borderRadius: '100%',
					border: `0.175rem solid ${ability.color}`,
					height: '3.5rem',
					width: '3.5rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<p style={{ fontSize: '2rem' }}>{Math.floor((ability.score -10)/2)}</p>
			</div>
			<p style={{ fontSize: '0.6rem' }}>MODIFIER</p>
		</div>
	)
}

const Ability = ({ ability }: { ability: AbilityType }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
			<div
				style={{
  				left: '-6px',
					position: 'relative',
					border: `0.175rem solid ${ability.color}`,
					padding: '0.2rem 0.4rem 0.2rem 1rem',
					borderWidth: '0.1rem 0.1rem 0.1rem 0',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<p>{ability.score}</p>
				{/* <input
					type="text"
					value={ability.score}
					style={{
						background: 'transparent',
						fontSize: '1rem',
						maxWidth: '1.1rem'
					}}
				/> */}
			</div>
			<p style={{ fontSize: '0.6rem' }}>SCORE</p>
		</div>
	)
}

const ModifierScore = ({ ability }: { ability: AbilityType }) => (
	<div style={{ display: 'flex', justifyContent: 'center' }}>
		<Modifier ability={ability} />

		<Ability ability={ability} />
	</div>
);

export default ModifierScore;