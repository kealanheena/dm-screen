"use client"

import { createContext } from "react";

import { Screen, Section } from "@/types";

interface ScreenContextType {
	screens: Screen[] | undefined;
	currentScreen: Screen;
	currentSection: Section;
	isCustomizing: boolean;
}

export const ScreenContext = createContext<ScreenContextType[] | undefined>(undefined);