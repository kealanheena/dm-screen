import React from "react";

import { getDefaultLayouts } from "@/actions/layout.action";
import Screen from "@/components/Screen";


export default async function Home() {
  const defaultLayouts = await getDefaultLayouts();

  console.log({ defaultLayouts });

  return (
    <Screen
      layouts={defaultLayouts}
    />
  );
}
