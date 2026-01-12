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
  spellcasting_ability: Ability_Score.INTELLIGENCE,
}, {
  key: 'barbarian',
  name: 'Barbarian',
}, {
  key: 'bard',
  name: 'Bard',
  spellcasting_ability: Ability_Score.CHARISMA,
}, {
  key: 'blood_hunter',
  name: 'Blood Hunter',
  feature_ability_modifier: Ability_Score.INTELLIGENCE,
}, {
  key: 'cleric',
  name: 'Cleric',
  spellcasting_ability: Ability_Score.WISDOM,
}, {
  key: 'druid',
  name: 'Druid',
  spellcasting_ability: Ability_Score.WISDOM,
}, {
  key: 'fighter',
  name: 'Fighter',
}, {
  key: 'gunslinger',
  name: 'Gunslinger',
  feature_ability_modifier: Ability_Score.DEXTERITY,
},  {
  key: 'illrigger',
  name: 'Illrigger',
}, {
  key: 'monk',
  name: 'Monk',
  feature_ability_modifier: Ability_Score.WISDOM,
}, {
  key: 'monster_hunter',
  name: 'Monster Hunter',
  feature_ability_modifier: Ability_Score.INTELLIGENCE,
}, {
  key: 'paladin',
  name: 'Paladin',
  spellcasting_ability: Ability_Score.CHARISMA,
}, {
  key: 'ranger',
  name: 'Ranger',
  spellcasting_ability: Ability_Score.WISDOM,
}, {
  key: 'rogue',
  name: 'Rogue',
}, {
  key: 'sorcerer',
  name: 'Sorcerer',
  spellcasting_ability: Ability_Score.CHARISMA,
}, {
  key: 'warlock',
  name: 'Warlock',
  spellcasting_ability: Ability_Score.CHARISMA,
}, {
  key: 'wizard',
  name: 'Wizard',
  spellcasting_ability: Ability_Score.INTELLIGENCE,
}];

const playerCharacters = [{
	id: 1,
	name: 'Angry Spots',
	archtype: 'barbarian',
  species: 'shifter',
  subspecies: 'swiftstride_shifter',
	url: process.env.SPOTS_URL || null,
  current_hit_points: 14,
  max_hit_points: 14,
  ability_scores: {
    strength: 16,
    dexterity: 14,
    constitiution: 14,
    intelligence: 8,
    wisdom: 12,
    charisma: 10,
  }
}, {
	id: 2,
	name: 'Venimous Micheal',
	archtype: 'bard',
  species: 'elf',
  subspecies: 'high_elf',
  current_hit_points: 8,
  max_hit_points: 8,
  ability_scores: {
    strength: 8,
    dexterity: 14,
    constitiution: 10,
    intelligence: 14,
    wisdom: 12,
    charisma: 16,
  }
}, {
	id: 3,
	name: 'Healer Henry',
	archtype: 'cleric',
  species: 'human',
  current_hit_points: 9,
  max_hit_points: 9,
  ability_scores: {
    strength: 14,
    dexterity: 8,
    constitiution: 12,
    intelligence: 10,
    wisdom: 16,
    charisma: 14,
  }
}, {
	id: 4,
	name: 'Hexful Agatha',
	archtype: 'druid',
  species: 'hexblood',
  url: process.env.AGATHA_URL,
  current_hit_points: 10,
  max_hit_points: 10,
  ability_scores: {
    strength: 8,
    dexterity: 14,
    constitiution: 14,
    intelligence: 12,
    wisdom: 16,
    charisma: 10,
  }
}, {
	id: 5,
	name: 'Fighting Felix',
	archtype: 'fighter',
  species: 'dwarf',
  current_hit_points: 13,
  max_hit_points: 13,
  ability_scores: {
    strength: 16,
    dexterity: 14,
    constitiution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 8,
  }
}, {
	id: 6,
	name: 'Calm Max',
	archtype: 'monk',
  species: 'halfling',
  current_hit_points: 10,
  max_hit_points: 10,
  ability_scores: {
    strength: 8,
    dexterity: 16,
    constitiution: 14,
    intelligence: 12,
    wisdom: 14,
    charisma: 10,
  }
}, {
	id: 7,
	name: 'Rightous Dick',
	archtype: 'paladin',
  species: 'goliath',
  subspecies: 'fire_giant_goliath',
  current_hit_points: 12,
  max_hit_points: 12,
  ability_scores: {
    strength: 16,
    dexterity: 8,
    constitiution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 14,
  }
}, {
	id: 8,
	name: 'Watchful Bruce',
	archtype: 'ranger',
  species: 'elf',
  subspecies: 'wood_elf',
  current_hit_points: 11,
  max_hit_points: 11,
  ability_scores: {
    strength: 14,
    dexterity: 16,
    constitiution: 12,
    intelligence: 10,
    wisdom: 14,
    charisma: 8,
  }
}, {
	id: 9,
	name: 'Tricky Ricky',
	archtype: 'rogue',
  species: 'tiefling',
  subspecies: 'infernal_tiefling',
  current_hit_points: 8,
  max_hit_points: 8,
  ability_scores: {
    strength: 8,
    dexterity: 16,
    constitiution: 10,
    intelligence: 12,
    wisdom: 14,
    charisma: 14,
  }
}, {
	id: 10,
	name: 'Magic Mike',
	archtype: 'sorcerer',
  species: 'aasimar',
  current_hit_points: 8,
  max_hit_points: 8,
  ability_scores: {
    strength: 8,
    dexterity: 14,
    constitiution: 14,
    intelligence: 12,
    wisdom: 10,
    charisma: 16,
  }
},  {
	id: 11,
	name: 'Fixit Futhark',
	archtype: 'warlock',
  species: 'warforged',
  url: process.env.FUTHARK_URL,
  current_hit_points: 9,
  max_hit_points: 9,
  ability_scores: {
    strength: 10,
    dexterity: 14,
    constitiution: 12,
    intelligence: 8,
    wisdom: 14,
    charisma: 16,
  }
}, {
	id: 12,
	name: 'Analytical Aynrix',
	archtype: 'wizard',
  species: 'human',
  url: process.env.AYNRIX_URL,
  current_hit_points: 7,
  max_hit_points: 7,
  ability_scores: {
    strength: 8,
    dexterity: 14,
    constitiution: 12,
    intelligence: 16,
    wisdom: 14,
    charisma: 10,
  }
}, {
	id: 13,
	name: 'Bloody Butcher',
  archtype: 'blood_hunter',
	species: 'gnome',
  subspecies: 'forest_gnome',
  current_hit_points: 12,
  max_hit_points: 12,
  ability_scores: {
    strength: 8,
    dexterity: 16,
    constitiution: 14,
    intelligence: 14,
    wisdom: 10,
    charisma: 12,
  }
}, {
	id: 14,
	name: 'Deadey Ace',
  archtype: 'gunslinger',
	species: 'shifter',
  subspecies: 'wildhunt_shifter',
  url: process.env.ACER_URL,
  current_hit_points: 8,
  max_hit_points: 8,
  ability_scores: {
    strength: 8,
    dexterity: 16,
    constitiution: 10,
    intelligence: 14,
    wisdom: 14,
    charisma: 12,
  }
}, {
	id: 15,
	name: 'Lucifer Morningstar',
  archtype: 'illrigger',
	species: 'tiefling',
  subspecies: 'chthonic_tiefling',
  current_hit_points: 11,
  max_hit_points: 11,
  ability_scores: {
    strength: 16,
    dexterity: 14,
    constitiution: 12,
    intelligence: 8,
    wisdom: 14,
    charisma: 14,
  }
}, {
	id: 16,
	name: 'Mad Maddy',
  archtype: 'monster_hunter',
	species: 'dragonborn',
  subspecies: 'black_dragonborn',
  current_hit_points: 11,
  max_hit_points: 11,
  ability_scores: {
    strength: 14,
    dexterity: 16,
    constitiution: 12,
    intelligence: 14,
    wisdom: 10,
    charisma: 8,
  }
}]

const prisma = new PrismaClient();

async function main() {
	const archtypeTasks = archtypes.map(async (
    archtype: {
      name: string;
      key: string;
      spellcasting_ability?: "STRENGTH" | "DEXTERITY" | "CONSTITUTION" | "INTELLIGENCE" | "WISDOM" | "CHARISMA" | undefined;
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
    async ({ archtype, species: speciesSingular,  subspecies: subspeciesSingular, ability_scores: abilityScores, ...playerCharacter }) => {
      const archtypeItem = archtypeesResult.find(({ key }) => key === archtype);
      const speciesItem = speciesResult.find(({ key }) => key === speciesSingular);
      const subspeciesItem = speciesItem?.subspecies.find(({ key }) => key === subspeciesSingular);

      const data = {
        archtype_id: archtypeItem?.id || 1,
        species_id: speciesItem?.id || 1,
        subspecies_id: subspeciesItem?.id || null,
        ...playerCharacter
      };
      
      
      const { id: playerCharacterId } = await prisma.player_Character.upsert({
        where: { id: playerCharacter.id },
        create: data,
        update: data,
      });

      return prisma.ability_Scores.upsert({
        where: { player_character_id: playerCharacterId },
        create: {
          player_character_id: playerCharacterId,
          ...abilityScores,
        },
        update: {
          player_character_id: playerCharacterId,
          ...abilityScores,
        },
      });

      return
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