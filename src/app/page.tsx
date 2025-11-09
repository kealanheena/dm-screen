import React from "react";

import { getDefaultScreens } from "@/actions/screen.action";
import Screen from "@/components/Screen";


export default async function Home() {
  const defaultLayouts = await getDefaultScreens();

  console.log({ defaultLayouts });

  return (
    <Screen
      layouts={defaultLayouts}
    />
  );
}
