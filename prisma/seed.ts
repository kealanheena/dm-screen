import { Ability_Score, PrismaClient } from "@prisma/client";

const species = [{
  key: 'aasimar',
  name: 'Aasimar',
},
{
  key: 'changling',
  name: 'Changling',
}, {
  key: 'dragonborn',
  name: 'Dragonborn',
  subspecies: [
    { key: 'black', name: 'Black' },
    { key: 'blue', name: 'Blue' },
    { key: 'brass', name: 'Brass' },
    { key: 'bronze', name: 'Bronze' },
    { key: 'copper', name: 'Copper' },
    { key: 'gold', name: 'Gold' }, 
    { key: 'green', name: 'Green' },
    { key: 'red', name: 'Red' },
    { key: 'silver', name: 'Silver' },
    { key: 'white', name: 'White' },
  ]
}, {
  key: 'dwarf',
  name: 'Dwarf',
}, {
  key: 'elf',
  name: 'Elf',
  subspecies: [
    { key: 'drow', name: 'Drow' },
    { key: 'high', name: 'High' },
    { key: 'wood', name: 'Wood' },
  ]
}, {
  key: 'gnome',
  name: 'Gnome',
  subspecies: [
    { key: 'forest', name: 'Forest' },
    { key: 'rock', name: 'Rock' },
  ]
}, {
  key: 'hexblood',
  name: 'Hexblood',
}, {
  key: 'goliath',
  name: 'Goliath',
  subspecies: [
    { key: 'cloud_giant', name: 'Cloud Giant' },
    { key: 'fire_giant', name: 'Fire Giant' },
    { key: 'frost_giant', name: 'Frost Giant' },
    { key: 'hill_giant', name: 'Hill Giant' },
    { key: 'stone_giant', name: 'Stone Giant' },
    { key: 'storm_giant', name: 'Storm Giant' },
  ]
}, {
  key: 'halfling',
  name: 'Halfling',
}, {
  key: 'human',
  name: 'Human',
}, {
  key: 'kalashtar',
  name: 'Kalashtar',
}, {
  key: 'khoravar',
  name: 'Khoravar',
}, {
  key: 'orc',
  name: 'Orc',
}, {
  key: 'shifter',
  name: 'Shifter',
  subspecies: [
    { key: 'beasthide', name: 'Beasthide' },
    { key: 'longtooth', name: 'Longtooth' },
    { key: 'swiftstride', name: 'Swiftstride' },
    { key: 'wildhunt', name: 'Wildhunt' },
  ]
},{
  key: 'tiefling',
  name: 'Tiefling',
  subspecies: [
    { key: 'abyssal', name: 'Abyssal' },
    { key: 'chthonic', name: 'Chthonic' },
    { key: 'infernal', name: 'Infernal' },
  ]
}, {
  key: 'warforged',
  name: 'Warforged',
}];

const archtypes = [{
  key: 'artificer',
  name: 'Artificer',
  spellcasting_ability: Ability_Score.INT,
}, {
  key: 'barbarian',
  name: 'Barbarian',
}, {
  key: 'bard',
  name: 'Bard',
  spellcasting_ability: Ability_Score.CHA,
}, {
  key: 'blood_hunter',
  name: 'Blood Hunter',
}, {
  key: 'cleric',
  name: 'Cleric',
  spellcasting_ability: Ability_Score.WIS,
}, {
  key: 'druid',
  name: 'Druid',
  spellcasting_ability: Ability_Score.WIS,
}, {
  key: 'fighter',
  name: 'Fighter',
}, {
  key: 'gunslinger',
  name: 'Gunslinger',
},  {
  key: 'illrigger',
  name: 'Illrigger',
}, {
  key: 'monk',
  name: 'Monk',
}, {
  key: 'monster_hunter',
  name: 'Monster Hunter',
}, {
  key: 'paladin',
  name: 'Paladin',
  spellcasting_ability: Ability_Score.CHA,
}, {
  key: 'ranger',
  name: 'Ranger',
  spellcasting_ability: Ability_Score.WIS,
}, {
  key: 'rogue',
  name: 'Rogue',
}, {
  key: 'sorcerer',
  name: 'Sorcerer',
  spellcasting_ability: Ability_Score.CHA,
}, {
  key: 'warlock',
  name: 'Warlock',
  spellcasting_ability: Ability_Score.CHA,
}, {
  key: 'wizard',
  name: 'Wizard',
  spellcasting_ability: Ability_Score.INT,
}];

const playerCharacters = [{
	id: 1,
	name: 'Angry Spots',
	archtype: 'barbarian',
  species: 'shifter',
  subspecies: 'shifter_swiftstride',
	url: process.env.SPOTS_URL || null,
}, {
	id: 2,
	name: 'Venimous Micheal',
	archtype: 'bard',
  species: 'elf',
  subspecies: 'elf_high',
}, {
	id: 3,
	name: 'Healer Henry',
	archtype: 'cleric',
  species: 'human',
}, {
	id: 4,
	name: 'Hexful Agatha',
	archtype: 'druid',
  species: 'hexblood',
  url: process.env.AGATHA_URL,
}, {
	id: 5,
	name: 'Fighting Felix',
	archtype: 'fighter',
  species: 'dwarf',
}, {
	id: 6,
	name: 'Calm Max',
	archtype: 'monk',
  species: 'halfling',
}, {
	id: 7,
	name: 'Rightous Dick',
	archtype: 'paladin',
  species: 'goliath',
  subspecies: 'goliath_fire_giant',
}, {
	id: 8,
	name: 'Watchful Bruce',
	archtype: 'ranger',
  species: 'elf',
  subspecies: 'elf_wood',
}, {
	id: 9,
	name: 'Tricky Ricky',
	archtype: 'rogue',
  species: 'tiefling',
  subspecies: 'tiefling_infernal',
}, {
	id: 10,
	name: 'Magic Mike',
	archtype: 'sorcerer',
  species: 'aasimar',
},  {
	id: 11,
	name: 'Fixit Futhark',
	archtype: 'warlock',
  species: 'warforged',
  url: process.env.FUTHARK_URL,
}, {
	id: 12,
	name: 'Analytical Aynrix',
	archtype: 'wizard',
  species: 'human',
  url: process.env.AYNRIX_URL,
}, {
	id: 13,
	name: 'Bloody Butcher',
  archtype: 'blood_hunter',
	species: 'gnome',
  subspecies: 'gnome_forest',
}, {
	id: 14,
	name: 'Deadey Ace',
  archtype: 'gunslinger',
	species: 'shifter',
  subspecies: 'shifter_wildhunt',
  url: process.env.ACER_URL,
}, {
	id: 15,
	name: 'Lucifer Morningstar',
  archtype: 'illrigger',
	species: 'tiefling',
  subspecies: 'tiefling_chthonic',
}, {
	id: 16,
	name: 'Mad Maddy',
  archtype: 'monster_hunter',
	species: 'dragonborn',
  subspecies: 'dragonborn_black',
}]

const prisma = new PrismaClient();

async function main() {
	const archtypeTasks = archtypes.map(async (
    archtype: {
      name: string;
      key: string;
      spellcasting_ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
    }
  ) => prisma.archtype.upsert({
      where: { key: archtype.key },
      create: archtype,
      update: archtype,
    }));
  const speicesTasks = species.map(async ({ subspecies = [], ...speciesSingular }) => {
    const newSpecies = await prisma.species.upsert({
      where: { key: speciesSingular.key },
      create: speciesSingular,
      update: speciesSingular,
    });

    const subspeciesTasks = subspecies.map(async (subspeciesSingular) => (
      prisma.subspecies.upsert({
        where: { key: `${subspeciesSingular.key}_${speciesSingular.key}` },
        create: {
          ...subspeciesSingular,
          species_id: newSpecies.id,
          key: `${subspeciesSingular.key}_${speciesSingular.key}`,
        },
        update: {
          ...subspeciesSingular,
          species_id: newSpecies.id,
          key: `${subspeciesSingular.key}_${speciesSingular.key}`,
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
  const archtypeesResult = await Promise.all(archtypeTasks);


	const playerCharacterTasks = playerCharacters.map(
    async ({ archtype, species: speciesSingular,  subspecies: subspeciesSingular, ...playerCharacter }) => {
      const archtypeItem = archtypeesResult.find(({ key }) => key === archtype);
      const speciesItem = speciesResult.find(({ key }) => key === speciesSingular);
      const subspeciesItem = speciesItem?.subspecies.find(({ key }) => key === subspeciesSingular);

      const data = {
        archtype_id: archtypeItem?.id || 1,
        species_id: speciesItem?.id || 1,
        subspecies_id: subspeciesItem?.id || null,
        ...playerCharacter
      };
      
      
      return prisma.player_Character.upsert({
        where: { id: playerCharacter.id },
        create: data,
        update: data,
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