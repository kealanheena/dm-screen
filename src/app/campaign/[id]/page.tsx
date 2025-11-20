import React from "react";

import { Box, Tab, Tabs, Typography } from "@mui/material";

// import ScreenContextWrapper from "@/components/client/Wrappers/ScreenContextWrapper";

// import CampaignPageClient from "./CampaignPageClient";
// import ScreenActions from "@/components/server/ScreenActions";
// import CreateNewScreen from "@/components/client/CreateScreen";
import { getCampaignById } from "@/actions/campaign.action";

import { ServerPageProps } from "@/types";
import ScreenTabs from "./ScreenTabs";


export default async function CampaignPage({ params }: ServerPageProps) {
	const { id } = await params;
	const campaign = await getCampaignById(Number(id));

	if (!campaign) {
		return;
	}

	return (
		<div>
			<Typography variant="h4">{campaign.title}</Typography>

			<ScreenTabs screens={campaign.screens} />
		</div>
		// <ScreenContextWrapper>
		// 	<ScreenActions id={Number(id)} />
			
		// 	{campaign ? (
		// 		<CampaignPageClient campaign={campaign} /> 
		// 	) : (
		// 		<CreateNewScreen />
		// 	)}
		// </ScreenContextWrapper>
	)
}
