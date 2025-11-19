"use client"

import React from "react";

import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Map } from '@mui/icons-material';
import { redirect, RedirectType } from "next/navigation";
import { DMScreenType } from "@/types";


interface CampaignType {
	id: number;
	title: string;
}

interface ScreenListItemProps {
	campaign: CampaignType;
}

export default function CampaignListItem({ campaign }: ScreenListItemProps) {
	const { id, title} = campaign;


  return (
   <ListItemButton onClick={() => redirect(`/screen/${id}`, RedirectType.replace)}>
			<ListItem>
				<Map />
				<ListItemText sx={{ pl: 0.5 }} primary={`${title}`} />
			</ListItem>
		</ListItemButton>
  );
}
