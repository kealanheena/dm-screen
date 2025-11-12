import React from "react";

import { getScreens } from "@/actions/screen.action";

import Screen from "./component";


export default async function ScreenPage() {
	const screens = await getScreens() || [];

	return (
		<Screen
			screens={screens}
		/>
	);
}
