import { AbilityScore, PrismaClient } from "@prisma/client";

const species = [{
  key: 'aasimar',
  name: 'Aasimar',
  updatedAt: new Date(),
},
{
  key: 'changling',
  name: 'Changling',
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
  key: 'hexblood',
  name: 'Hexblood',
  updatedAt: new Date(),
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
  key: 'kalashtar',
  name: 'Kalashtar',
  updatedAt: new Date(),
}, {
  key: 'khoravar',
  name: 'Khoravar',
  updatedAt: new Date(),
}, {
  key: 'orc',
  name: 'Orc',
  updatedAt: new Date(),
}, {
  key: 'shifter',
  name: 'Shifter',
  updatedAt: new Date(),
  subspecies: [
    { key: 'shifter_beasthide', name: 'Beasthide' },
    { key: 'shifter_longtooth', name: 'Longtooth' },
    { key: 'shifter_swiftstride', name: 'Swiftstride' },
    { key: 'shifter_wildhunt', name: 'Wildhunt' },
  ]
},{
  key: 'tiefling',
  name: 'Tiefling',
  updatedAt: new Date(),
  subspecies: [
    { key: 'tiefling_abyssal', name: 'Abyssal' },
    { key: 'tiefling_chthonic', name: 'Chthonic' },
    { key: 'tiefling_infernal', name: 'Infernal' },
  ]
}, {
  key: 'warforged',
  name: 'Warforged',
  updatedAt: new Date(),
}];

const dndClasses = [{
  key: 'artificer',
  name: 'Artificer',
  primaryAbility: AbilityScore.INT,
  updatedAt: new Date(),
}, {
  key: 'artificer',
  name: 'Artificer',
  primaryAbility: AbilityScore.INT,
  updatedAt: new Date(),
}, {
  key: 'barbarian',
  name: 'Barbarian',
  primaryAbility: AbilityScore.STR,
  updatedAt: new Date(),
}, {
  key: 'bard',
  name: 'Bard',
  primaryAbility: AbilityScore.CHA,
  updatedAt: new Date(),
}, {
  key: 'blood_hunter',
  name: 'Blood Hunter',
  primaryAbility: AbilityScore.WIS,
  updatedAt: new Date(),
}, {
  key: 'cleric',
  name: 'Cleric',
  primaryAbility: AbilityScore.WIS,
  updatedAt: new Date(),
}, {
  key: 'druid',
  name: 'Druid',
  primaryAbility: AbilityScore.WIS,
  updatedAt: new Date(),
}, {
  key: 'fighter',
  name: 'Fighter',
  primaryAbility: AbilityScore.STR,
  updatedAt: new Date(),
}, {
  key: 'gunslinger',
  name: 'Gunslinger',
  primaryAbility: AbilityScore.DEX,
  updatedAt: new Date(),
},  {
  key: 'illrigger',
  name: 'Illrigger',
  primaryAbility: AbilityScore.CHA,
  updatedAt: new Date(),
}, {
  key: 'monk',
  name: 'Monk',
  primaryAbility: AbilityScore.DEX,
  updatedAt: new Date(),
}, {
  key: 'monster_hunter',
  name: 'Monster Hunter',
  primaryAbility: AbilityScore.STR,
  updatedAt: new Date(),
}, {
  key: 'paladin',
  name: 'Paladin',
  primaryAbility: AbilityScore.STR,
  updatedAt: new Date(),
}, {
  key: 'ranger',
  name: 'Ranger',
  primaryAbility: AbilityScore.DEX,
  updatedAt: new Date(),
}, {
  key: 'rogue',
  name: 'Rogue',
  primaryAbility: AbilityScore.DEX,
  updatedAt: new Date(),
}, {
  key: 'sorcerer',
  name: 'Sorcerer',
  primaryAbility: AbilityScore.CHA,
  updatedAt: new Date(),
}, {
  key: 'warlock',
  name: 'Warlock',
  primaryAbility: AbilityScore.CHA,
  updatedAt: new Date(),
}, {
  key: 'wizard',
  name: 'Wizard',
  primaryAbility: AbilityScore.INT,
  updatedAt: new Date(),
}];

const playerCharacters = [{
	id: 1,
	name: 'Angry Spots',
	dndClass: 'barbarian',
  species: 'shifter',
  subspecies: 'shifter_swiftstride',
	url: process.env.SPOTS_URL || null,
	updatedAt: new Date(),
}, {
	id: 2,
	name: 'Venimous Micheal',
	dndClass: 'bard',
  species: 'elf',
  subspecies: 'elf_high',
	updatedAt: new Date(),
}, {
	id: 3,
	name: 'Healer Henry',
	dndClass: 'cleric',
  species: 'human',
	updatedAt: new Date(),
}, {
	id: 4,
	name: 'Hexful Agatha',
	dndClass: 'druid',
  species: 'hexblood',
  url: process.env.AGATHA_URL,
	updatedAt: new Date(),
}, {
	id: 5,
	name: 'Fighting Felix',
	dndClass: 'fighter',
  species: 'dwarf',
	updatedAt: new Date(),
}, {
	id: 6,
	name: 'Calm Max',
	dndClass: 'monk',
  species: 'halfling',
	updatedAt: new Date(),
}, {
	id: 7,
	name: 'Rightous Dick',
	dndClass: 'paladin',
  species: 'goliath',
  subspecies: 'goliath_fire_giant',
	updatedAt: new Date(),
}, {
	id: 8,
	name: 'Watchful Bruce',
	dndClass: 'ranger',
  species: 'elf',
  subspecies: 'elf_wood',
	updatedAt: new Date(),
}, {
	id: 9,
	name: 'Tricky Ricky',
	dndClass: 'rogue',
  species: 'tiefling',
  subspecies: 'tiefling_infernal',
	updatedAt: new Date(),
}, {
	id: 10,
	name: 'Magic Mike',
	dndClass: 'sorcerer',
  species: 'aasimar',
	updatedAt: new Date(),
},  {
	id: 11,
	name: 'Fixit Futhark',
	dndClass: 'warlock',
  species: 'warforged',
  url: process.env.FUTHARK_URL,
	updatedAt: new Date(),
}, {
	id: 12,
	name: 'Analytical Aynrix',
	dndClass: 'wizard',
  species: 'human',
  url: process.env.AYNRIX_URL,
	updatedAt: new Date(),
}, {
	id: 13,
	name: 'Bloody Butcher',
  dndClass: 'blood_hunter',
	species: 'gnome',
  subspecies: 'gnome_forest',
	updatedAt: new Date(),
}, {
	id: 14,
	name: 'Deadey Ace',
  dndClass: 'gunslinger',
	species: 'shifter',
  subspecies: 'shifter_wildhunt',
  url: process.env.ACER_URL,
	updatedAt: new Date(),
}, {
	id: 15,
	name: 'Lucifer Morningstar',
  dndClass: 'illrigger',
	species: 'tiefling',
  subspecies: 'tiefling_chthonic',
	updatedAt: new Date(),
}, {
	id: 16,
	name: 'Mad Maddy',
  dndClass: 'monster_hunter',
	species: 'dragonborn',
  subspecies: 'dragonborn_black',
	updatedAt: new Date(),
}]

const prisma = new PrismaClient();

async function main() {
	const dndClassesTasks = dndClasses.map(async ({ name, key, primaryAbility }) => {


    return prisma.class.upsert({
      where: { key },
      create: {
        name,
        key,
        primaryAbility,
      },
      update: {
        name,
        key,
        primaryAbility,
      },
    })
});
  const speicesTasks = species.map(async ({ subspecies = [], ...speciesSingular }) => {
    const newSpecies = await prisma.species.upsert({
      where: { key: speciesSingular.key },
      create: speciesSingular,
      update: speciesSingular,
    });

    const subspeciesTasks = subspecies.map(async (subspeciesSingular) => (
      prisma.subspecies.upsert({
        where: { key: subspeciesSingular.key },
        create: {
          speciesId: newSpecies.id,
          ...subspeciesSingular,
        },
        update: {
          speciesId: newSpecies.id,
          ...subspeciesSingular,
        },
      })
    ));
    
    const newSubspecies = await Promise.all(subspeciesTasks);

    return {
      ...newSpecies,
      subspecies: newSubspecies,
    }
  });
  const speciesResult = await Promise.all(speicesTasks);
  const dndClassesResult = await Promise.all(dndClassesTasks);


	const playerCharacterTasks = playerCharacters.map(
    async ({ dndClass, species: speciesSingular,  subspecies: subspeciesSingular, ...playerCharacter }) => {
      const dndClassItem = dndClassesResult.find(({ key }) => key === dndClass);
      const speciesItem = speciesResult.find(({ key }) => key === speciesSingular);
      const subspeciesItem = speciesItem?.subspecies.find(({ key }) => key === subspeciesSingular);
      
      
      return prisma.playerCharacter.upsert({
        where: { id: playerCharacter.id },
        create: {
          classId: dndClassItem?.id || 1,
          speciesId: speciesItem?.id || 1,
          subspeciesId: subspeciesItem?.id || null,
          ...playerCharacter
        },
        update: {
          classId: dndClassItem?.id || 1,
          speciesId: speciesItem?.id || 1,
          subspeciesId: subspeciesItem?.id || null,
          ...playerCharacter
        },
      })
    }
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