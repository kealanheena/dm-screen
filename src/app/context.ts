"use client"

import { createContext } from "react";

import { SectionType, SpeciesType, SubspeciesType, PlayerCharacterType } from "@/types";


interface FormDataType extends PlayerCharacterType {
	name: string;
	url: string;
	species: SpeciesType | undefined;
	subspecies: SubspeciesType | undefined;
}


interface ScreenContextType {
	isCustomizing: boolean;
	setIsCustomizing: React.Dispatch<React.SetStateAction<boolean>>
	playerCharacters: PlayerCharacterType[]
}

interface FormDataContextType {
	data: FormDataType | undefined;
	setData: React.Dispatch<React.SetStateAction<SectionType | undefined>>;
}


const defaultScreenContext = {
	isCustomizing: false,
	setIsCustomizing: () => {},
	playerCharacters: [],
}

const defaultFormData = {
	data: undefined,
	setData: () => {},
}

export const ScreenContext = createContext<ScreenContextType>(defaultScreenContext);
export const FormDataContext = createContext<FormDataContextType>(defaultFormData);
