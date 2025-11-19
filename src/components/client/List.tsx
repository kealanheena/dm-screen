"use client"

import React from "react";
import { map } from 'lodash';

import { List as MuiList, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Public } from '@mui/icons-material';
import { redirect, RedirectType } from "next/navigation";
import { DMScreenType } from "@/types";


interface CampaignType {
	id: number;
	title: string;
}

interface ScreenListItemProps {
	items: DMScreenType[] | CampaignType[];
	itemKey: 'screen' |  'campaign';
}

export default function List({ items, itemKey }: ScreenListItemProps) {
	// const { id, title} = item;

  return (
		<MuiList
			sx={{
				width: '100%',
				bgcolor: 'background.paper',
				position: 'relative',
				overflow: 'auto',
				maxHeight: 300,
				'& ul': { padding: 0 },
			}}
			subheader={<li />}
		>
			{map(items, ({ id, title }) => (
				<ListItemButton onClick={() => redirect(`/${itemKey}/${id}`, RedirectType.replace)}>
					<ListItem>
						<Public color="primary" />
						<ListItemText sx={{ pl: 0.5 }} primary={`${title}`} />
					</ListItem>
				</ListItemButton>
			))}
   </MuiList>
  );
}
