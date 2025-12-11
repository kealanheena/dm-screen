'use client'

import React, { Fragment, useState, useContext } from "react";
import { map } from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import { ScreenContext } from '@/app/context'
import { COLUMNS, ROWHEIGHT } from "@/constants";

import './styles.css'
import { Card, CardContent, Grid, Typography } from "@mui/material";
import PlayerCharacterFormDialog from "@/components/client/PlayerCharacterFormDialog";
import { Groups } from "@mui/icons-material";
import CardComponent from "@/components/client/Cards/CardComponent";

const ReactGridLayout = WidthProvider(RGL);

export default function ScreenPageClient({
	cards,
	layouts,
	...props
}) {
	const { isCustomizing } = useContext(ScreenContext);
	
	const [layout, setLayout] = useState(layouts || []);
	// const [cards, setCards] = useState(layouts || []);

  const onLayoutChange = (layout) => setLayout(layout);

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
				{map(cards, (card, index) => (
					<Card key={card.layout.id}>
						<CardContent sx={{ height: '100%'}}>
							<Grid container justifyContent="space-between">
								<Grid display="flex" alignItems="center">
									<Groups color='primary'/>
									<Typography sx={{ pl: 1 }} variant="h6">{card.title}</Typography>
								</Grid>

								<PlayerCharacterFormDialog />
							</Grid>

							{/* List component */}
							{console.log(card.type)}
							<CardComponent type={card.type}/> 
						</CardContent>
					</Card>
				))}
			</ReactGridLayout>
		</Fragment>
	);
}

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then(fn => fn.default(BasicLayout));
// }