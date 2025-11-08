"use client"

import React from 'react';
import { map } from 'lodash';

import {
	Grid,
} from '@mui/material';
import { Layout } from '@/types';

import LayoutCard from './LayoutCard';


interface LayoutProps { 
	layout: Layout;
	isCurrentLayout: boolean;
	onClickLayout: Function;
}

export default function Layout({
	layout,
	isCurrentLayout,
	onClickLayout
}: LayoutProps ) {
	// console.log({ layoutTEST: layout });
	// const { id, cards, width } = layout;

	const hoverStyle = isCurrentLayout ? {
		cursor: 'pointer',
	} : {
		cursor: 'pointer',
		p: 0.5,
	};
	

  return (
		<Grid
			key={layout?.id}
			size={layout?.width}
			sx={{
				'&:hover': hoverStyle,
				border: isCurrentLayout ? 3 : 0,
				borderRadius: 2,
				borderColor: 'primary.main',
				transition: "transform 0.15s ease-in-out",
				p: 1,
			}}
			onClick={onClickLayout(layout?.id)}
		>
			{map(layout?.cards || [], (card) => (
				<LayoutCard key={card?.id} card={card} />
			))}
		</Grid>
  );
}