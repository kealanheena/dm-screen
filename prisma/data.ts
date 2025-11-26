import { AbilityScore } from "@prisma/client";

// TODO: Figure out why this data isn't being imported to seed.ts
const data = {
	classes: [{
		key: 'artificer',
		name: 'Artificer',
		primaryAbility: AbilityScore.INT,
		secondaryAbility: AbilityScore.DEX,
		spellcastingAbility: AbilityScore.INT,
		updatedAt: new Date(),
	},
	{
		key: 'barbarian',
		name: 'Barbarian',
		primaryAbility: AbilityScore.STR,
		secondaryAbility: AbilityScore.CON,
	},
	{
		key: 'bard',
		name: 'Bard',
		primaryAbility: AbilityScore.CHA,
		secondaryAbility: AbilityScore.DEX,
		spellcastingAbility: AbilityScore.CHA,
		updatedAt: new Date(),
	},
	{
		key: 'cleric',
		name: 'Cleric',
		primaryAbility: AbilityScore.WIS,
		secondaryAbility: AbilityScore.STR,
		spellcastingAbility: AbilityScore.WIS,
		updatedAt: new Date(),
	},
	{
		key: 'druid',
		name: 'Druid',
		primaryAbility: AbilityScore.WIS,
		secondaryAbility: AbilityScore.DEX,
		spellcastingAbility: AbilityScore.WIS,
		updatedAt: new Date(),
	},
	{
		key: 'fighter',
		name: 'Fighter',
		primaryAbility: AbilityScore.STR,
		secondaryAbility: AbilityScore.CON,
	},
	{
		key: 'gunslinger',
		name: 'Gunslinger',
		primaryAbility: AbilityScore.DEX,
	},
	{
		key: 'monk',
		name: 'Monk',
		primaryAbility: AbilityScore.DEX,
		secondaryAbility: AbilityScore.WIS,
	},
	{
		key: 'paladin',
		name: 'Paladin',
		primaryAbility: AbilityScore.STR,
		secondaryAbility: AbilityScore.CHA,
		spellcastingAbility: AbilityScore.CHA,
		updatedAt: new Date(),
	},
	{
		key: 'ranger',
		name: 'Ranger',
		primaryAbility: AbilityScore.DEX,
		secondaryAbility: AbilityScore.WIS,
		spellcastingAbility: AbilityScore.WIS,
		updatedAt: new Date(),
	},
	{
		key: 'rogue',
		name: 'Rogue',
		primaryAbility: AbilityScore.DEX,
	},
	{
		key: 'sorcerer',
		name: 'Sorcerer',
		primaryAbility: AbilityScore.CHA,
		secondaryAbility: AbilityScore.DEX,
		spellcastingAbility: AbilityScore.CHA,
		updatedAt: new Date(),
	},
	{
		key: 'warlock',
		name: 'Warlock',
		primaryAbility: AbilityScore.CHA,
		secondaryAbility: AbilityScore.DEX,
		spellcastingAbility: AbilityScore.CHA,
		updatedAt: new Date(),
	},
	{
		key: 'wizard',
		name: 'Wizard',
		primaryAbility: AbilityScore.INT,
		secondaryAbility: AbilityScore.DEX,
		spellcastingAbility: AbilityScore.INT,
		updatedAt: new Date(),
	}],
	playerCharacters: [{
		id: 1,
		name: 'Acer Venator',
		classKey: 'gunslinger',
		url: process.env.ACER_URL || null,
		updatedAt: new Date(),
	}, {
		id: 2,
		name: 'Adelaide',
		classKey: 'bard',
		url: process.env.ADELAIDE_URL || null,
		updatedAt: new Date(),
	}, {
		id: 3,
		name: 'Agatha',
		classKey: 'druid',
		url: process.env.AGATHA_URL || null,
		updatedAt: new Date(),
	}, {
		id: 4,
		name: 'Futhark',
		classKey: 'warlock',
		url: process.env.FUTHARK_URL || null,
		updatedAt: new Date(),
	}, {
		id: 5,
		name: 'Spots',
		classKey: 'barbarian',
		url: process.env.SPOTS_URL || null,
		updatedAt: new Date(),
	}],
	species: [{
		key: 'aasimar',
		name: 'Aasimar',
		updatedAt: new Date(),
	}, {
		key: 'dragonborn',
		name: 'Dragonborn',
		updatedAt: new Date(),
		subspecies: [
			{ key: 'dragonborn_black', name: 'Black' },
			{ key: 'dragonborn_blue', name: 'Blue' },
			{ key: 'dragonborn_brass', name: 'Brass' },
			{ key: 'dragonborn_bronze', name: 'Bronze' },
			{ key: 'dragonborn_copper', name: 'Copper' },
			{ key: 'dragonborn_gold', name: 'Gold' }, 
			{ key: 'dragonborn_green', name: 'Green' },
			{ key: 'dragonborn_red', name: 'Red' },
			{ key: 'dragonborn_silver', name: 'Silver' },
			{ key: 'dragonborn_white', name: 'White' },
		]
	}, {
		key: 'dwarf',
		name: 'Dwarf',
		updatedAt: new Date(),
	}, {
		key: 'elf',
		name: 'Elf',
		updatedAt: new Date(),
		subspecies: [
			{ key: 'elf_drow', name: 'Drow' },
			{ key: 'elf_high', name: 'High' },
			{ key: 'elf_wood', name: 'Wood' },
		]
	}, {
		key: 'gnome',
		name: 'Gnome',
		updatedAt: new Date(),
		subspecies: [
			{ key: 'gnome_forest', name: 'Forest' },
			{ key: 'gnome_rock', name: 'Rock' },
		]
	}, {
		key: 'goliath',
		name: 'Goliath',
		updatedAt: new Date(),
		subspecies: [
			{ key: 'goliath_cloud_giant', name: 'Cloud Giant' },
			{ key: 'goliath_fire_giant', name: 'Fire Giant' },
			{ key: 'goliath_frost_giant', name: 'Frost Giant' },
			{ key: 'goliath_hill_giant', name: 'Hill Giant' },
			{ key: 'goliath_stone_giant', name: 'Stone Giant' },
			{ key: 'goliath_storm_giant', name: 'Storm Giant' },
		]
	}, {
		key: 'halfling',
		name: 'Halfling',
		updatedAt: new Date(),
	}, {
		key: 'human',
		name: 'Human',
		updatedAt: new Date(),
	}, {
		key: 'orc',
		name: 'Orc',
		updatedAt: new Date(),
	}, {
		key: 'tiefling',
		name: 'Tiefling',
		updatedAt: new Date(),
		subspecies: [
			{ key: 'tiefling_abyssal', name: 'Abyssal' },
			{ key: 'tiefling_chthonic', name: 'Chthonic' },
			{ key: 'tiefling_Infernal', name: 'Infernal' },
		]
	}]
}

export default data;