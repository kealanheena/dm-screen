"use client"

import { createContext } from "react";

import { Screen } from "@/types";

interface ScreenContextType {
	screens: Screen[];
	currentScreen: Screen;
	isCustomizing: boolean;
}

export const ScreenContext = createContext<ScreenContextType[] | undefined>(undefined);