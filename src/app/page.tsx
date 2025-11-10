import React, { Fragment } from "react";

import { getScreens } from "@/actions/screen.action";


export default async function Home() {
  const screens = await getScreens({ isTemplate: true });

  return (
    <Fragment>
      <h1>Test</h1>
    </Fragment>
  );
}
