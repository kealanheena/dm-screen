"use client"

import React, { Fragment, ReactNode, useState } from "react";

import { SectionType } from "@/types";
import { ScreenContext } from "@/app/context";


type ScreenContextWrapperProps = {
  children: ReactNode;
};

const ScreenContextWrapper = ({ children }: ScreenContextWrapperProps) => {
	const [isCustomizing, setIsCustomizing] = useState<boolean>(false);
	const [selectedSection, setSelectedSection] = useState<SectionType | undefined>(undefined);

	const screenContextValue = {
		isCustomizing,
		setIsCustomizing,
		selectedSection,
		setSelectedSection
	};

	return (
		<ScreenContext value={screenContextValue}>
			{children}
		</ScreenContext>
	)
};

export default ScreenContextWrapper;
