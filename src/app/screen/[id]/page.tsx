import React from "react";
import { map, toString } from 'lodash';

import { getScreenById } from "@/actions/screen.action";
import ScreenContextWrapper from "@/components/client/Wrappers/ScreenContextWrapper";

import ScreenPageClient from "./ScreenPageClient";
import ScreenActions from "@/components/server/ScreenActions";
import CreateNewScreen from "@/components/client/CreateScreen";

import { ServerPageProps } from "@/types";
import { MINH, MINW } from "@/constants";


export default async function ScreenPage({ params }: ServerPageProps) {
	const { id } = await params;
	const screen = await getScreenById(Number(id));

	const layouts = map(screen?.cards, ({ layout }) => {
		const { id, ...rest } = layout;

		return {
			i: toString(id),
			minH: MINH,
			minW: MINW,
			...rest
		}
	});

	return (
		<ScreenContextWrapper>
			<ScreenActions id={Number(id)} />
			
			{screen ? (
				<ScreenPageClient layouts={layouts|| []} cards={screen?.cards || []} />
			) : (
				<CreateNewScreen />
			)}
		</ScreenContextWrapper>
	)
}
