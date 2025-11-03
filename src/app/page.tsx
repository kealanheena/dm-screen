import React from "react";
import { currentUser } from "@clerk/nextjs/server";

import { getDbUserId } from "@/actions/user.action";
import Screen from "@/components/Screen";
import LogInPage from "./log-in/page";


export default async function Home() {
  return (
    <Screen />
  );
}
