"use client"

import React, { ReactNode, useState } from "react";

import { ScreenContext } from "@/app/context";
import { CharacterClassType, PlayerCharacterType, SpeciesType } from "@/types";


type ScreenContextWrapperProps = {
	classes?: CharacterClassType[];
	species?: SpeciesType[];
	playerCharacters?: PlayerCharacterType[];
  children: ReactNode;
};


const ScreenContextWrapper = ({
	classes = [],
	species = [],
	playerCharacters = [],
	children,
}: ScreenContextWrapperProps) => {
	const [isCustomizing, setIsCustomizing] = useState<boolean>(false);

	const screenContextValue = {
		isCustomizing,
		setIsCustomizing,
		classes,
		species,
		playerCharacters,
	};

	return (
		<ScreenContext value={screenContextValue}>
			{children}
		</ScreenContext>
	)
};

export default ScreenContextWrapper;
