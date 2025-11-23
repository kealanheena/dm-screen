import { AbilityScore, PrismaClient } from "@prisma/client";

const classes = [{
	title: 'Artificer',
  primaryAbility: AbilityScore.INTELLIGENCE,
  secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.INTELLIGENCE,
}, {
	title: 'Barbarian',
  primaryAbility: AbilityScore.STRENGTH,
  secondaryAbility: AbilityScore.CONSTITUTION,
}, {
	title: 'Bard',
  primaryAbility: AbilityScore.CHARISMA,
  secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.CHARISMA,
}, {
	title: 'Cleric',
  primaryAbility: AbilityScore.WISDOM,
  secondaryAbility: AbilityScore.STRENGTHORDEXTERITY,
	spellcastingAbility: AbilityScore.WISDOM,
}, {
	title: 'Druid',
  primaryAbility: AbilityScore.WISDOM,
  secondaryAbility: AbilityScore.STRENGTHORDEXTERITY,
	spellcastingAbility: AbilityScore.WISDOM,
}, {
	title: 'Fighter',
  primaryAbility: AbilityScore.STRENGTHORDEXTERITY,
  secondaryAbility: AbilityScore.CONSTITUTION,
}, {
	title: 'Monk',
  primaryAbility: AbilityScore.DEXTERITY,
  secondaryAbility: AbilityScore.WISDOM,
}, {
	title: 'Paladin',
  primaryAbility: AbilityScore.STRENGTHORDEXTERITY,
  secondaryAbility: AbilityScore.CHARISMA,
	spellcastingAbility: AbilityScore.CHARISMA,
}, {
	title: 'Ranger',
  primaryAbility: AbilityScore.DEXTERITY,
  secondaryAbility: AbilityScore.WISDOM,
	spellcastingAbility: AbilityScore.WISDOM,
}, {
	title: 'Rogue',
  primaryAbility: AbilityScore.DEXTERITY,
}, {
	title: 'Sorcerer',
  primaryAbility: AbilityScore.CHARISMA,
	secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.CHARISMA,
}, {
	title: 'Warlock',
  primaryAbility: AbilityScore.CHARISMA,
	secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.CHARISMA,
}, {
	title: 'Wizard',
  primaryAbility: AbilityScore.INTELLIGENCE,
	secondaryAbility: AbilityScore.DEXTERITY,
	spellcastingAbility: AbilityScore.INTELLIGENCE,
}]

const prisma = new PrismaClient();

async function main() {

	const createdClasses = await prisma.class.createManyAndReturn({
		data: classes
	})

  console.log('Created Classes: ', createdClasses);
}

main()
  .then(async () => { await prisma.$disconnect()})
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })