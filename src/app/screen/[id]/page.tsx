import React from "react";

import { getScreenById } from "@/actions/screen.action";
import ScreenContextWrapper from "@/components/Wrappers/ScreenContextWrapper";

import Screen from "./component";
import ScreenActions from "./actions/page";
import CreateNewScreen from "./actions/components/CreateScreen";


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
