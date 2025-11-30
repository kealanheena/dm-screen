const Abilities = [
	{
		name: 'STRENGTH',
		score: 16,
		color: 'red',
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
		color: 'green',
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
		color: 'yellow',
		savingThrow: {
			isProficient: false,
		},
		skills: []
	}, {
		name: 'INTELLIGENCE',
		score: 16,
		color: 'blue',
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
		color: 'violet',
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
		color: 'magenta',
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
]

export default Abilities;