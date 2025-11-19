"use client"

import React from "react";

import { ListItem as MUIListItem, ListItemButton, ListItemText } from '@mui/material';
import { Public } from '@mui/icons-material';
import { redirect, RedirectType } from "next/navigation";
import { DMScreenType } from "@/types";


interface CampaignType {
	id: number;
	title: string;
}

interface ScreenListItemProps {
	item: DMScreenType | CampaignType;
}

export default function ListItem({ item }: ScreenListItemProps) {
	const { id, title} = item;

  return (
   <ListItemButton onClick={() => redirect(`/screen/${id}`, RedirectType.replace)}>
			<MUIListItem>
				<Public color="primary" />
				<ListItemText sx={{ pl: 0.5 }} primary={`${title}`} />
			</MUIListItem>
		</ListItemButton>
  );
}
