import { AbilityScore, PrismaClient } from "@prisma/client";

const dndClasses = [{
  id: 1,
  key: 'artificer',
  name: 'Artificer',
  primaryAbility: AbilityScore.INT,
  secondaryAbility: AbilityScore.DEX,
  spellcastingAbility: AbilityScore.INT,
  updatedAt: new Date(),
},
{
  id: 2,
  key: 'barbarian',
  name: 'Barbarian',
  primaryAbility: AbilityScore.STR,
  secondaryAbility: AbilityScore.CON,
},
{
  id: 3,
  name: 'Bard',
  key: 'bard',
  primaryAbility: AbilityScore.CHA,
  secondaryAbility: AbilityScore.DEX,
  spellcastingAbility: AbilityScore.CHA,
  updatedAt: new Date(),
},
{
  id: 4,
  name: 'Cleric',
  key: 'cleric',
  primaryAbility: AbilityScore.WIS,
  secondaryAbility: AbilityScore.STR,
  spellcastingAbility: AbilityScore.WIS,
  updatedAt: new Date(),
},
{
  id: 5,
  name: 'Druid',
  key: 'druid',
  primaryAbility: AbilityScore.WIS,
  secondaryAbility: AbilityScore.DEX,
  spellcastingAbility: AbilityScore.WIS,
  updatedAt: new Date(),
},
{
  id: 6,
  key: 'fighter',
  name: 'Fighter',
  primaryAbility: AbilityScore.STR,
  secondaryAbility: AbilityScore.CON,
},
{
  id: 7,
  key: 'gunslinger',
  name: 'Gunslinger',
  primaryAbility: AbilityScore.DEX,
},
{
  id: 8,
  key: 'monk',
  name: 'Monk',
  primaryAbility: AbilityScore.DEX,
  secondaryAbility: AbilityScore.WIS,
},
{
  id: 9,
  key: 'paladin',
  name: 'Paladin',
  primaryAbility: AbilityScore.STR,
  secondaryAbility: AbilityScore.CHA,
  spellcastingAbility: AbilityScore.CHA,
  updatedAt: new Date(),
},
{
  id: 10,
  name: 'Ranger',
  key: 'ranger',
  primaryAbility: AbilityScore.DEX,
  secondaryAbility: AbilityScore.WIS,
  spellcastingAbility: AbilityScore.WIS,
  updatedAt: new Date(),
},
{
  id: 11,
  name: 'Rogue',
  key: 'rogue',
  primaryAbility: AbilityScore.DEX,
},
{
  id: 12,
  name: 'Sorcerer',
  key: 'sorcerer',
  primaryAbility: AbilityScore.CHA,
  secondaryAbility: AbilityScore.DEX,
  spellcastingAbility: AbilityScore.CHA,
  updatedAt: new Date(),
},
{
  id: 13,
  name: 'Warlock',
  key: 'warlock',
  primaryAbility: AbilityScore.CHA,
  secondaryAbility: AbilityScore.DEX,
  spellcastingAbility: AbilityScore.CHA,
  updatedAt: new Date(),
},
{
  id: 14,
  name: 'Wizard',
  key: 'wizard',
  primaryAbility: AbilityScore.INT,
  secondaryAbility: AbilityScore.DEX,
  spellcastingAbility: AbilityScore.INT,
  updatedAt: new Date(),
}];

const playerCharacters = [{
	id: 1,
	name: 'Acer Venator',
	classId: 7,
	url: process.env.ACER_URL || null,
	updatedAt: new Date(),
}, {
	id: 2,
	name: 'Adelaide',
	classId: 3,
	url: process.env.ADELAIDE_URL || null,
	updatedAt: new Date(),
}, {
	id: 3,
	name: 'Agatha',
	classId: 5,
	url: process.env.AGATHA_URL || null,
	updatedAt: new Date(),
}, {
	id: 4,
	name: 'Futhark',
	classId: 12,
	url: process.env.FUTHARK_URL || null,
	updatedAt: new Date(),
}, {
	id: 5,
	name: 'Spots',
	classId: 2,
	url: process.env.SPOTS_URL || null,
	updatedAt: new Date(),
}]

const prisma = new PrismaClient();

async function main() {
	const dndClassesTasks = dndClasses.map(async (dndClass) => prisma.class.upsert({
		where: { id: dndClass.id },
		create: dndClass,
		update: dndClass,
	}));
	const playerCharacterTasks = playerCharacters.map(async (playerCharacter) => prisma.playerCharacter.upsert({
		where: { id: playerCharacter.id },
		create: playerCharacter,
		update: playerCharacter,
	}));

	await Promise.all(dndClassesTasks);
	await Promise.all(playerCharacterTasks);
}

main()
  .then(async () => { await prisma.$disconnect()})
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })