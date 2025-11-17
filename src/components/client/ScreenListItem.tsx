"use client"

import React from "react";

import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Map } from '@mui/icons-material';
import { redirect, RedirectType } from "next/navigation";
import { DMScreenType } from "@/types";


interface ScreenListItemProps {
	screen: Pick<DMScreenType, "id" | "title">;
}

export default function ScreenListItem({ screen }: ScreenListItemProps) {
	const { id, title} = screen;


  return (
   <ListItemButton onClick={() => redirect(`/screen/${id}`, RedirectType.replace)}>
			<ListItem key={`${title}`}>
				<Map />
				<ListItemText sx={{ pl: 0.5 }} primary={`${title}`} />
			</ListItem>
		</ListItemButton>
  );
}
