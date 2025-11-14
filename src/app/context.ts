"use client"

import { createContext } from "react";

import { DMScreenType, SectionType } from "@/types";

interface ScreenContextType {
	screens: DMScreenType[];
	currentSection: SectionType;
	isCustomizing: boolean;
}

export const ScreenContext = createContext<ScreenContextType[] | undefined>(undefined);