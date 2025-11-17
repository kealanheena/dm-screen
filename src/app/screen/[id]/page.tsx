import React from "react";

import { getScreenById } from "@/actions/screen.action";
import ScreenContextWrapper from "@/components/client/Wrappers/ScreenContextWrapper";

import Screen from "./component";
import ScreenActions from "@/components/server/ScreenActions";
import CreateNewScreen from "@/components/client/CreateScreen";


type ScreenPageProps = {
  params: { id: string };
};

export default async function ScreenPage({ params }: ScreenPageProps) {
	const { id } = await params;
	const screen = await getScreenById(Number(id));

	return (
		<ScreenContextWrapper>
			<ScreenActions id={Number(id)} />
			
			{screen ? (
				<Screen screen={screen} /> 
			) : (
				<CreateNewScreen />
			)}
		</ScreenContextWrapper>
	)
}
