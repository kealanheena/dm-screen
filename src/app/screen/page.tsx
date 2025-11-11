import React, { Fragment } from "react";

import { getScreens } from "@/actions/screen.action";

import Screen from "./component";
import ScreenActions from './component/actions';


export default async function ScreenPage() {
	const screens = await getScreens();

	console.log(screens)

	return (
		<Fragment>
			<ScreenActions screens={screens} />

			<Screen screens={screens} />
		</Fragment>
	);
}
