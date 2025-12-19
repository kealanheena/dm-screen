'use client'

import React, { Fragment, useState, useContext } from "react";
import { map } from "lodash";
import RGL, { Layout, WidthProvider } from "react-grid-layout";

import { ScreenContext } from '@/app/context'
import { COLUMNS, ROWHEIGHT } from "@/constants";

import './styles.css'
import { Card, CardContent, Grid, Typography } from "@mui/material";
import PlayerCharacterFormDialog from "@/components/client/PlayerCharacterFormDialog";
import { Groups } from "@mui/icons-material";
import CardComponent from "@/components/client/Cards/CardComponent";
import { useFetchScreenData } from "@/app/hooks";

const ReactGridLayout = WidthProvider(RGL);

export default function ScreenPageClient({
	cards,
	layouts,
	...props
}: {
	cards: { id: number; title: string; listConent: string | null; type: string }[]
	layouts: Layout[]
}) {
	const { data, isLoading, error } = useFetchScreenData();

	console.log({ data, isLoading, error })

	const { isCustomizing } = useContext(ScreenContext);
	
	const [layout, setLayout] = useState<Layout[]>(layouts || []);
	// const [cards, setCards] = useState(layouts || []);

  const onLayoutChange = (layout: Layout[]) => setLayout(layout);

	return (
		<Fragment>
			<ReactGridLayout
				isDraggable={isCustomizing}
				isResizable={isCustomizing}
				layout={layout}
				onLayoutChange={onLayoutChange}
				cols={COLUMNS}
				rowHeight={ROWHEIGHT}
				{...props}
			>
				{map(cards, (card) => (
					<Card key={card.layout.id}>
						<CardComponent card={card} type={card.type}/>
					</Card> 
				))}
			</ReactGridLayout>
		</Fragment>
	);
}

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then(fn => fn.default(BasicLayout));
// }