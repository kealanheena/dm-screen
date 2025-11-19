import React from "react";

import { getScreenById } from "@/actions/screen.action";
import ScreenContextWrapper from "@/components/client/Wrappers/ScreenContextWrapper";

import ScreenPageClient from "./ScreenPageClient";
import ScreenActions from "@/components/server/ScreenActions";
import CreateNewScreen from "@/components/client/CreateScreen";

import { ServerPageProps } from "@/types";


export default async function ScreenPage({ params }: ServerPageProps) {
	const { id } = await params;
	const screen = await getScreenById(Number(id));

	return (
		<ScreenContextWrapper>
			<ScreenActions id={Number(id)} />
			
			{screen ? (
				<ScreenPageClient screen={screen} /> 
			) : (
				<CreateNewScreen />
			)}
		</ScreenContextWrapper>
	)
}
