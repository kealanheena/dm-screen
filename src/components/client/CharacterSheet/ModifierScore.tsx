import React from 'react';


const ModifierScore = ({ ability }) => (
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