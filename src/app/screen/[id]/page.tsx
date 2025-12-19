import React from "react";
import { map, toString } from 'lodash';

import { getScreenById } from "@/actions/screen.action";
import ScreenContextWrapper from "@/components/client/Wrappers/ScreenContextWrapper";

import ScreenPageClient from "./ScreenPageClient";
import ScreenActions from "@/components/server/ScreenActions";
import CreateNewScreen from "@/components/client/CreateScreen";

import { ServerPageProps } from "@/types";
import { MINH, MINW } from "@/constants";
import CardComponent from "@/components/client/Cards/CardComponent";
import { Card } from "@mui/material";
import { getPlayerCharacters } from "@/actions/playerCharacter.action";
import { getClasses } from "@/actions/class.action";
import { getSpecies } from "@/actions/species.action";


export default async function ScreenPage({ params }: ServerPageProps) {
	const { id } = await params;
	// const screen = await getScreenById(Number(id));

	const classes = await getClasses();
	const species = await getSpecies();
	const playerCharacters = await getPlayerCharacters();

	const card = {
		title: 'the Party',
		type: 'LIST',
		listContent: 'list'
	}

	// console.log({ playe})

	return (
		<ScreenContextWrapper
			classes={classes}
			species={species}
			playerCharacters={playerCharacters}
		>
			<ScreenActions id={Number(id)} />

			<Card sx={{ maxWidth: '300px', width: '300px', maxHeight: '500px', height: '500px' }}>
				<CardComponent card={card} />
			</Card> 
			
			{/* {screen ? (
				<ScreenPageClient layouts={layouts|| []} cards={screen?.cards || []} />
			) : (
				<CreateNewScreen />
			)} */}
		</ScreenContextWrapper>
	)
}
