"use client"

import React from "react";
import { map } from 'lodash';

import { List as MuiList, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Groups, Map, Public } from '@mui/icons-material';
import { redirect, RedirectType } from "next/navigation";

interface ItemsType {
	id: number;
	name: string;
}
interface ScreenListItemProps {
	items: ItemsType[];
	itemKey: 'campaign' | 'playerCharacter' | 'screen';
}

export default function List({ items, itemKey }: ScreenListItemProps) {

	const onClickRedirect = (id: number) => () => {
		redirect(`/${itemKey}/${id}`, RedirectType.replace);
	};

	const getIcon = () => {
		switch (itemKey) {
			case 'campaign':
				return <Public color="primary" />;
			case 'playerCharacter':
				return <Groups color="primary" />;
			case 'screen':
				return <Map color="primary" />;
			default:
			return <div />
		}
	}

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
			{map(items, (item) => (
				<ListItemButton
					key={`${itemKey}_${item.id}`}
					onClick={onClickRedirect(item.id)}
				>
					<ListItem>
						{getIcon()}
						<ListItemText sx={{ pl: 0.5 }} primary={`${item.name}`} />
					</ListItem>
				</ListItemButton>
			))}
   </MuiList>
  );
}
