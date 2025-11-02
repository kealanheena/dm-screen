"use client"

import React from 'react';
import { map } from 'lodash';

import {
	Grid,
} from '@mui/material';
import { LayoutType } from '@/types';

import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import LayoutCard from './LayoutCard';

export default function Layout({ layout, onClickLayout }: { layout: LayoutType, onClickLayout: Function }) {
	const { id, cards, width } = layout;
	

  return (
		<Grid
			key={id}
			size={width}
			sx={{
				'&:hover': {
					cursor: 'pointer',
					border: 2,
					borderRadius: 2,
					borderColor: 'primary.main',
					p: 0.5,
				},
				transition: "transform 0.15s ease-in-out",
				p: 1,
			}}
			onClick={onClickLayout(id)}
		>
			<Grid
				container
				alignItems="center"
				justifyContent="end"
			>
				<DeleteButton
					icon="icon_only"
					tooltip="Delete column"
					onClick={() => {}}
				/>
				<AddButton
					icon="icon_only"
					tooltip="Add card"
					onClick={() => {}}
				/>
			</Grid>

			{map(cards, (card) => (
				<LayoutCard card={card} />
			))}
		</Grid>
  );
}