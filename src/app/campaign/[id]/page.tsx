import React from "react";

import ScreenContextWrapper from "@/components/client/Wrappers/ScreenContextWrapper";

import CreateNewScreen from "@/components/client/CreateScreen";
import { getCampaignById } from "@/actions/campaign.action";

import { ServerPageProps } from "@/types";
import ScreenTabs from "./ScreenTabs";
// import CampaignPageClient from "./CampaignPageClient";
import CampaignActions from "@/components/server/CampaignActions";


export default async function CampaignPage({ params }: ServerPageProps) {
	const { id } = await params;
	const campaign = await getCampaignById(Number(id));

	if (!campaign) {
		return;
	}

	return (
		<ScreenContextWrapper>
			<CampaignActions id={Number(id)} />

			<br />

			<ScreenTabs screens={campaign.screens} />


			{campaign ? (
				// <CampaignPageClient campaign={campaign} /> 
				<div />
			) : (
				<CreateNewScreen />
			)}
		</ScreenContextWrapper>
		// <ScreenContextWrapper>
		// 	<ScreenActions id={Number(id)} />
			
		// </ScreenContextWrapper>
	)
}
