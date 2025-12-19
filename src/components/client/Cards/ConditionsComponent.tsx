'use client'

import React from "react";
import { map } from "lodash";

import { Diversity1, DirectionsRun, Elderly, HearingDisabled, Sick, OpenInNew, VisibilityOff, FrontHand, Boy, PersonOutlined, Terrain, Sledding, Hotel, Groups } from "@mui/icons-material";
import { Card, CardContent, Grid, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import PlayerCharacterFormDialog from "../PlayerCharacterFormDialog";

const CONDITIONS = [{
	name: 'Blinded',
	key: 'blinded',
	icon: VisibilityOff,
	description: (
		<ul>
			<li><strong>Can’t See.</strong> You can’t see and automatically fail any ability check that requires sight.</li>
			<li><strong>Attacks Affected.</strong> Attack rolls against you have Advantage, and your attack rolls have Disadvantage.</li>
		</ul>
	),
	url: '#BlindedCondition'
}, {
	name: 'Charmed',
	key: 'charmed',
	icon: Diversity1,
	description: (
		<ul>
			<li><strong>Can’t Harm the Charmer.</strong> You can’t attack the charmer or target the charmer with damaging abilities or magical effects.</li>
			<li><strong>Social Advantage.</strong> The charmer has Advantage on any ability check to interact with you socially.</li>
		</ul>
	),
	url: '#CharmedCondition'
}, {
	name: 'Deafened',
	key: 'deafened',
	icon: HearingDisabled,
	description: (
		<ul>
			<li><strong>Can’t Hear.</strong> You can’t hear and automatically fail any ability check that requires hearing.</li>
		</ul>
	),
	url: '#DeafenedCondition'
}, {
	name: 'Exhaustion',
	key: 'exhaustion',
	icon: Elderly,
	description: (
		<ul>
			<li><strong>Exhaustion Levels.</strong> This condition is cumulative. Each time you receive it, you gain 1 Exhaustion level. You die if your Exhaustion level is 6.</li>
			<li><strong>D20 Tests Affected.</strong> When you make a D20 Test, the roll is reduced by 2 times your Exhaustion level.</li>
			<li><strong>Speed Reduced.</strong> Your Speed is reduced by a number of feet equal to 5 times your Exhaustion level.</li>
			<li><strong>Removing Exhaustion Levels.</strong> Finishing a Long Rest removes 1 of your Exhaustion levels. When your Exhaustion level reaches 0, the condition ends.</li>
		</ul>
	),
	url: '#ExhaustionCondition'
}, {
	name: 'Frightened',
	key: 'frightened',
	icon: DirectionsRun,
	description: (
		<ul>
			<li><strong>Ability Checks and Attacks Affected.</strong> You have Disadvantage on ability checks and attack rolls while the source of fear is within line of sight.</li>
			<li><strong>Can’t Approach.</strong> You can’t willingly move closer to the source of fear.</li>
		</ul>
	),
	url: '#ExhaustionCondition'
}, {
	name: 'Grappled',
	key: 'grappled',
	icon: FrontHand,
	description: (
		<ul>
			<li><strong>Speed 0.</strong> Your Speed is 0 and can’t increase.</li>
			<li><strong>Attacks Affected.</strong> You have Disadvantage on attack rolls against any target other than the grappler.</li>
			<li><strong>Movable.</strong> The grappler can drag or carry you when it moves, but every foot of movement costs it 1 extra foot unless you are Tiny or two or more sizes smaller than it.</li>
		</ul>
	),
	url: '#GrappledCondition'
}, {
	name: 'Incapacitated',
	key: 'incapacitated',
	icon: Boy,
	description: (
		<ul>
			<li><strong>Inactive.</strong> You can’t take any action, Bonus Action, or Reaction.</li>
			<li><strong>No Concentration.</strong> Your Concentration is broken.</li>
			<li><strong>Speechless.</strong> You can’t speak.</li>
			<li><strong>Surprised.</strong> If you’re Incapacitated when you roll Initiative, you have Disadvantage on the roll.</li>
		</ul>
	),
	url: '#IncapacitatedCondition'
}, {
	name: 'Invisible',
	key: 'invisible',
	icon: PersonOutlined,
	description: (
		<ul>
			<li><strong>Surprise.</strong> If you’re Invisible when you roll Initiative, you have Advantage on the roll.</li>
			<li><strong>Concealed.</strong> You aren’t affected by any effect that requires its target to be seen unless the effect’s creator can somehow see you. Any equipment you are wearing or carrying is also concealed.</li>
			<li><strong>Attacks Affected.</strong>  Attack rolls against you have Disadvantage, and your attack rolls have Advantage. If a creature can somehow see you, you don’t gain this benefit against that creature.</li>
		</ul>
	),
	url: '#InvisibleCondition'
},  {
	name: 'Paralyzed',
	key: 'paralyzed',
	icon: Boy,
	description: (
		<ul>
			<li><strong>Incapacitated.</strong> You have the Incapacitated condition.</li>
			<li><strong>Speed 0.</strong> Your Speed is 0 and can’t increase.</li>
			<li><strong>Saving Throws Affected.</strong> You automatically fail Strength and Dexterity saving throws.</li>
			<li><strong>Attacks Affected.</strong> Attack rolls against you have Advantage.</li>
			<li><strong>Automatic Critical Hits.</strong> Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.</li>
		</ul>
	),
	url: '#ParalyzedCondition'
}, {
	name: 'Petrified',
	key: 'petrified',
	icon: Terrain,
	description: (
		<ul> 
			<li><strong>Turned to Inanimate Substance.</strong> You are transformed, along with any nonmagical objects you are wearing and carrying, into a solid inanimate substance (usually stone). Your weight increases by a factor of ten, and you cease aging.</li>
			<li><strong>Incapacitated.</strong> You have the Incapacitated condition.</li>
			<li><strong>Speed 0.</strong> Your Speed is 0 and can’t increase.</li>
			<li><strong>Attacks Affected.</strong> Attack rolls against you have Advantage.</li>
			<li><strong>Saving Throws Affected.</strong> You automatically fail Strength and Dexterity saving throws.</li>
			<li><strong>Resist Damage.</strong> You have Resistance to all damage.</li>
			<li><strong>Poison Immunity.</strong> You have Immunity to the Poisoned condition.</li>
		</ul>
	),
	url: '#PetrifiedCondition'
}, {
	name: 'Poisoned',
	key: 'poisoned',
	icon: Sick,
	description: (
		<ul> 
			<li><strong>Ability Checks and Attacks Affected.</strong> You have Disadvantage on attack rolls and ability checks.</li>
		</ul>
	),
	url: '#PoisonedCondition'
}, {
	name: 'Prone',
	key: 'prone',
	icon: Sledding,
	description: (
		<ul> 
			<li><strong>Restricted Movement.</strong> Your only movement options are to crawl or to spend an amount of movement equal to half your Speed (round down) to right yourself and thereby end the condition. If your Speed is 0, you can’t right yourself.</li>
			<li><strong>Attacks Affected.</strong> You have Disadvantage on attack rolls. An attack roll against you has Advantage if the attacker is within 5 feet of you. Otherwise, that attack roll has Disadvantage.</li>
		</ul>
	),
	url: '#ProneCondition'
}, {
	name: 'Restrained',
	key: 'restrained',
	icon: Boy,
	description: (
		<ul> 
			<li><strong>Speed 0.</strong> Your Speed is 0 and can’t increase.</li>
			<li><strong>Attacks Affected.</strong> Attack rolls against you have Advantage, and your attack rolls have Disadvantage.</li>
			<li><strong>Saving Throws Affected.</strong> You have Disadvantage on Dexterity saving throws.</li>
		</ul>
	),
	url: '#RestrainedCondition'
}, {
	name: 'Stunned',
	key: 'stunned',
	icon: Boy,
	description: (
		<ul> 
			<li><strong>Incapacitated.</strong> You have the Incapacitated condition.</li>
			<li><strong>Saving Throws Affected.</strong> You automatically fail Strength and Dexterity saving throws.</li>
			<li><strong>Attacks Affected.</strong> Attack rolls against you have Advantage.</li>
		</ul>
	),
	url: '#StunnedCondition'
}, {
	name: 'Unconscious',
	key: 'unconscious',
	icon: Hotel,
	description: (
		<ul> 
			<li><strong>Inert.</strong> You have the Incapacitated and Prone conditions, and you drop whatever you’re holding. When this condition ends, you remain Prone.</li>
			<li><strong>Speed 0.</strong> Your Speed is 0 and can’t increase.</li>
			<li><strong>Attacks Affected.</strong> Attack rolls against you have Advantage.</li>
			<li><strong>Saving Throws Affected.</strong> You automatically fail Strength and Dexterity saving throws.</li>
			<li><strong>Automatic Critical Hits.</strong> Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.</li>
			<li><strong>Unaware.</strong> You’re unaware of your surroundings.</li>
		</ul>
	),
	url: '#StunnedCondition'
}];







const baseUrl = 'https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary'

const ConditionsComponent = ({ card }: { card: { id: number, title: string }}) => {
	return (
			<CardContent sx={{ height: '100%'}}>
				<Grid container justifyContent="space-between">
					<Grid display="flex" alignItems="center">
						<Groups color='primary'/>
						<Typography sx={{ pl: 1 }} variant="h6">{card.title}</Typography>
					</Grid>
				</Grid>
				<Grid
					sx={{
						bgcolor: 'background.paper',
						position: 'relative',
						overflow: 'scroll',
						height: '100%',
						maxHeight: '100%',
					}}
				>
					<List
						sx={{
							'& ul': { padding: 0 },
						}}
					>
						{map(CONDITIONS, (condition) => (
							<ListItem key={`condition_${condition.key}`}>
								<ListItemText
									primary={
										<Grid display="flex">
											<condition.icon color="primary" />
											<Typography sx={{ pl: 1 }} >{condition.name}</Typography>
										</Grid>
									}
									secondary={condition.description}
									sx={{ pl: 0.5 }} 
								/>

								<IconButton onClick={() => window.open(`${baseUrl}${condition.url}`, '_blank')}>
									<OpenInNew />
								</IconButton>
							</ListItem>
						))}
						<br /> 
					</List>
			</Grid>
		</CardContent>
	)
};

export default ConditionsComponent;