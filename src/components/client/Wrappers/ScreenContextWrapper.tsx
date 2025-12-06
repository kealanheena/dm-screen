"use client"

import React, { ReactNode, useState } from "react";

import { ScreenContext } from "@/app/context";


type ScreenContextWrapperProps = {
  children: ReactNode;
};

const ScreenContextWrapper = ({ children }: ScreenContextWrapperProps) => {
	const [isCustomizing, setIsCustomizing] = useState<boolean>(false);

	const screenContextValue = {
		isCustomizing,
		setIsCustomizing,
	};

	return (
		<ScreenContext value={screenContextValue}>
			{children}
		</ScreenContext>
	)
};

export default ScreenContextWrapper;
