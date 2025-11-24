import { AbilityScore, PrismaClient } from "@prisma/client";

const classes = [{
	id: 1,
	title: 'Artificer',
  primaryAbility: AbilityScore.INT,
  secondaryAbility: AbilityScore.DEX,
	spellcastingAbility: AbilityScore.INT,
}, {
	id: 2,
	title: 'Barbarian',
  primaryAbility: AbilityScore.STR,
  secondaryAbility: AbilityScore.CON,
}, {
	id: 3,
	title: 'Bard',
  primaryAbility: AbilityScore.CHA,
  secondaryAbility: AbilityScore.DEX,
	spellcastingAbility: AbilityScore.CHA,
}, {
	id: 4,
	title: 'Cleric',
  primaryAbility: AbilityScore.WIS,
  secondaryAbility: AbilityScore.STR,
	spellcastingAbility: AbilityScore.WIS,
}, {
	id: 5,
	title: 'Druid',
  primaryAbility: AbilityScore.WIS,
  secondaryAbility: AbilityScore.STR,
	spellcastingAbility: AbilityScore.WIS,
}, {
	id: 6,
	title: 'Fighter',
  primaryAbility: AbilityScore.STR,
  secondaryAbility: AbilityScore.CON,
}, {
	id: 7,
	title: 'Gunslinger',
  primaryAbility: AbilityScore.DEX,
}, {
	id: 8,
	title: 'Monk',
  primaryAbility: AbilityScore.DEX,
  secondaryAbility: AbilityScore.WIS,
}, {
	id: 9,
	title: 'Paladin',
  primaryAbility: AbilityScore.STR,
  secondaryAbility: AbilityScore.CHA,
	spellcastingAbility: AbilityScore.CHA,
}, {
	id: 10,
	title: 'Ranger',
  primaryAbility: AbilityScore.DEX,
  secondaryAbility: AbilityScore.WIS,
	spellcastingAbility: AbilityScore.WIS,
}, {
	id: 11,
	title: 'Rogue',
  primaryAbility: AbilityScore.DEX,
}, {
	id: 12,
	title: 'Sorcerer',
  primaryAbility: AbilityScore.CHA,
	secondaryAbility: AbilityScore.DEX,
	spellcastingAbility: AbilityScore.CHA,
}, {
	id: 13,
	title: 'Warlock',
  primaryAbility: AbilityScore.CHA,
	secondaryAbility: AbilityScore.DEX,
	spellcastingAbility: AbilityScore.CHA,
}, {
	id: 14,
	title: 'Wizard',
  primaryAbility: AbilityScore.INT,
	secondaryAbility: AbilityScore.DEX,
	spellcastingAbility: AbilityScore.INT,
}]

const prisma = new PrismaClient();

async function main() {
	const tasks = classes.map(async ({ id, ...data }) => prisma.class.upsert({
		where: { id },
		create: {
			...data,
			updatedAt: new Date(),
		},
		update:  {
			...data,
			updatedAt: new Date(),
		},
	}))

	const createdClasses = await Promise.all(tasks);

  console.log('Created Classes: ', createdClasses);
}

main()
  .then(async () => { await prisma.$disconnect()})
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })