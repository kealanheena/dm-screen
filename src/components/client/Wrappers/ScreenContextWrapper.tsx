"use client"

import React, { ReactNode, useState } from "react";

import { ScreenContext } from "@/app/context";
import { PlayerCharacterType } from "@/types";


type ScreenContextWrapperProps = {
	playerCharacters?: PlayerCharacterType[];
  children: ReactNode;
};

const ScreenContextWrapper = ({
	playerCharacters = [],
	children,
}: ScreenContextWrapperProps) => {
	const [isCustomizing, setIsCustomizing] = useState<boolean>(false);

	const screenContextValue = {
		isCustomizing,
		setIsCustomizing,
		playerCharacters,
	};

	return (
		<ScreenContext value={screenContextValue}>
			{children}
		</ScreenContext>
	)
};

export default ScreenContextWrapper;
