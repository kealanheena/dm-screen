import { AbilityScore, PrismaClient } from "@prisma/client";

const classes = [{
	id: 1,
	title: 'Artificer',
  primaryAbility: AbilityScore.INTELLIGENCE,
  secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.INTELLIGENCE,
}, {
	id: 2,
	title: 'Barbarian',
  primaryAbility: AbilityScore.STRENGTH,
  secondaryAbility: AbilityScore.CONSTITUTION,
}, {
	id: 3,
	title: 'Bard',
  primaryAbility: AbilityScore.CHARISMA,
  secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.CHARISMA,
}, {
	id: 4,
	title: 'Cleric',
  primaryAbility: AbilityScore.WISDOM,
  secondaryAbility: AbilityScore.STRENGTHORDEXTERITY,
	spellcastingAbility: AbilityScore.WISDOM,
}, {
	id: 5,
	title: 'Druid',
  primaryAbility: AbilityScore.WISDOM,
  secondaryAbility: AbilityScore.STRENGTHORDEXTERITY,
	spellcastingAbility: AbilityScore.WISDOM,
}, {
	id: 6,
	title: 'Fighter',
  primaryAbility: AbilityScore.STRENGTHORDEXTERITY,
  secondaryAbility: AbilityScore.CONSTITUTION,
}, {
	id: 7,
	title: 'Gunslinger',
  primaryAbility: AbilityScore.DEXTERITY,
}, {
	id: 8,
	title: 'Monk',
  primaryAbility: AbilityScore.DEXTERITY,
  secondaryAbility: AbilityScore.WISDOM,
}, {
	id: 9,
	title: 'Paladin',
  primaryAbility: AbilityScore.STRENGTHORDEXTERITY,
  secondaryAbility: AbilityScore.CHARISMA,
	spellcastingAbility: AbilityScore.CHARISMA,
}, {
	id: 10,
	title: 'Ranger',
  primaryAbility: AbilityScore.DEXTERITY,
  secondaryAbility: AbilityScore.WISDOM,
	spellcastingAbility: AbilityScore.WISDOM,
}, {
	id: 11,
	title: 'Rogue',
  primaryAbility: AbilityScore.DEXTERITY,
}, {
	id: 12,
	title: 'Sorcerer',
  primaryAbility: AbilityScore.CHARISMA,
	secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.CHARISMA,
}, {
	id: 13,
	title: 'Warlock',
  primaryAbility: AbilityScore.CHARISMA,
	secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.CHARISMA,
}, {
	id: 14,
	title: 'Wizard',
  primaryAbility: AbilityScore.INTELLIGENCE,
	secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.INTELLIGENCE,
}]

const prisma = new PrismaClient();

async function main() {
	const tasks = classes.map(async ({ id, ...data }) => prisma.class.upsert({
		where: { id },
		create: data,
		update: data,
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