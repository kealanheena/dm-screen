"use client"

import React from "react";

import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Public } from '@mui/icons-material';
import { redirect, RedirectType } from "next/navigation";


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
				<Public color="primary" />
				<ListItemText sx={{ pl: 0.5 }} primary={`${title}`} />
			</ListItem>
		</ListItemButton>
  );
}
