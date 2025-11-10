import React, { Fragment } from "react";

import {
	Box,
	Grid,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';

import { getScreens } from "@/actions/screen.action";
import Screen from "@/components/Screen";
import ScreenActions from '@/components/ScreenActions';

import { Layout } from "@/types";


export default async function Home() {
  const screens = await getScreens({ isTemplate: true });

  return (
    <Fragment>
      <ScreenActions screens={screens} />

      <Screen screens={screens} />
    </Fragment>
  );
}
