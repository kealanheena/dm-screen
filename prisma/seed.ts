import { AbilityScore, PrismaClient } from "@prisma/client";

const species = [{
  key: 'aasimar',
  name: 'Aasimar',
  updatedAt: new Date(),
}, {
  key: 'dragonborn',
  name: 'Dragonborn',
  updatedAt: new Date(),
  subSpecies: [
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
  subSpecies: [
    { key: 'elf_drow', name: 'Drow' },
    { key: 'elf_high', name: 'High' },
    { key: 'elf_wood', name: 'Wood' },
  ]
}, {
  key: 'gnome',
  name: 'Gnome',
  updatedAt: new Date(),
  subSpecies: [
    { key: 'gnome_forest', name: 'Forest' },
    { key: 'gnome_rock', name: 'Rock' },
  ]
}, {
  key: 'goliath',
  name: 'Goliath',
  updatedAt: new Date(),
  subSpecies: [
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
  subSpecies: [
    { key: 'tiefling_abyssal', name: 'Abyssal' },
    { key: 'tiefling_chthonic', name: 'Chthonic' },
    { key: 'tiefling_infernal', name: 'Infernal' },
  ]
}];

const dndClasses = [{
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
}];

const playerCharacters = [{
	id: 1,
	name: 'Acer Venator',
	dndClass: 'gunslinger',
  species: 'elf',
	url: process.env.ACER_URL || null,
	updatedAt: new Date(),
}, {
	id: 2,
	name: 'Adelaide',
	dndClass: 'bard',
  species: 'elf',
	url: process.env.ADELAIDE_URL || null,
	updatedAt: new Date(),
}, {
	id: 3,
	name: 'Agatha',
	dndClass: 'druid',
  species: 'elf',
	url: process.env.AGATHA_URL || null,
	updatedAt: new Date(),
}, {
	id: 4,
	name: 'Futhark',
	dndClass: 'warlock',
  species: 'elf',
	url: process.env.FUTHARK_URL || null,
	updatedAt: new Date(),
}, {
	id: 5,
	name: 'Spots',
	dndClass: 'barbarian',
  species: 'elf',
	url: process.env.SPOTS_URL || null,
	updatedAt: new Date(),
}]

const prisma = new PrismaClient();

async function main() {
	const dndClassesTasks = dndClasses.map(async (dndClass) => prisma.class.upsert({
		where: { key: dndClass.key },
		create: dndClass,
		update: dndClass,
	}));
  const speicesTasks = species.map(async ({ subSpecies = [], ...speciesSingular }) => {
    const newSpecies = await prisma.species.upsert({
      where: { key: speciesSingular.key },
      create: speciesSingular,
      update: speciesSingular,
    });

    const subSpeciesTasks = subSpecies.map(async (subSpeciesSingular) => (
      prisma.subSpecies.upsert({
        where: { key: subSpeciesSingular.key },
        create: {
          speciesId: newSpecies.id,
          ...subSpeciesSingular,
        },
        update: {
          speciesId: newSpecies.id,
          ...subSpeciesSingular,
        },
      })
    ));
    
    const newSubSpecies = await Promise.all(subSpeciesTasks);

    return {
      ...newSpecies,
      subSpecies: newSubSpecies,
    }
  });
  const speciesResult = await Promise.all(speicesTasks);
  const dndClassesResult = await Promise.all(dndClassesTasks);


	const playerCharacterTasks = playerCharacters.map(
    async ({ dndClass, species: speciesSingular,  ...playerCharacter }) => (
      prisma.playerCharacter.upsert({
        where: { id: playerCharacter.id },
        create: {
          classId: dndClassesResult.find(({ key }) => key === dndClass)?.id || 1,
          speciesId: speciesResult.find(({ key }) => key === speciesSingular)?.id || 1,
          ...playerCharacter
        },
        update: {
          classId: dndClassesResult.find(({ key }) => key === dndClass)?.id,
          speciesId: speciesResult.find(({ key }) => key === speciesSingular)?.id,
          ...playerCharacter
        },
      })
    )
  );

	await Promise.all(playerCharacterTasks);
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })