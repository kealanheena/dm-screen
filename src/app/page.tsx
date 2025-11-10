import React from "react";

import { getScreens } from "@/actions/screen.action";
import Screen from "@/components/Screen";


export default async function Home() {
  const screens = await getScreens();

  return (
    <Screen layouts={screens} />
  );
}
