"use client"

import { createContext } from "react";

import { SectionType } from "@/types";

interface ScreenContextType {
	selectedSection: SectionType | undefined;
	setSelectedSection: React.Dispatch<React.SetStateAction<SectionType | undefined>>;
	isCustomizing: boolean;
	setIsCustomizing: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultScreenContext = {
	selectedSection: undefined,
	setSelectedSection: () => {},
	isCustomizing: false,
	setIsCustomizing: () => {},
}

export const ScreenContext = createContext<ScreenContextType>(defaultScreenContext);