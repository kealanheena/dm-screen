"use client"

import { createContext } from "react";

import { SectionType } from "@/types";

interface ScreenContextType {
	selectedSection: SectionType | undefined;
	setSelectedSection: Function;
	isCustomizing: boolean;
	setIsCustomizing: Function;
}

const defaultScreenContext = {
	selectedSection: undefined,
	setSelectedSection: () => {},
	isCustomizing: false,
	setIsCustomizing: () => {},
}

export const ScreenContext = createContext<ScreenContextType[]>(defaultScreenContext);