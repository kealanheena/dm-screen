"use client"

import React from "react";
import { map } from 'lodash';

import { List as MuiList, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Public } from '@mui/icons-material';
import { redirect, RedirectType } from "next/navigation";
import { DMScreenType, CampaignType } from "@/types";

interface ScreenListItemProps {
	items: DMScreenType[] | CampaignType[];
	itemKey: 'screen' |  'campaign';
}

export default function List({ items, itemKey }: ScreenListItemProps) {
	// const { id, title} = item;

	const onClickRedirect = (id: number) => () => {
		redirect(`/${itemKey}/${id}`, RedirectType.replace);
	};

  return (
		<MuiList
			sx={{
				width: '100%',
				position: 'relative',
				overflow: 'auto',
				maxHeight: 300,
				// '& ul': { padding: 0 },
			}}
			// subheader={<li />}
		>
			{map(items, ({ id, title }) => (
				<ListItemButton
					key={`${itemKey}_${id}`}
					onClick={onClickRedirect(id)}
				>
					<ListItem>
						<Public color="primary" />
						<ListItemText sx={{ pl: 0.5 }} primary={`${title}`} />
					</ListItem>
				</ListItemButton>
			))}
   </MuiList>
  );
}
