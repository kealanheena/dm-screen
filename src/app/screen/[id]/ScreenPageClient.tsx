'use client'

import React, { Fragment, useState, useContext } from "react";
import { map } from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import { Card } from "@mui/material";
import { ScreenContext } from '@/app/context'
import { COLUMNS, ROWHEIGHT } from "@/constants";

import './styles.css'

const ReactGridLayout = WidthProvider(RGL);

export default function ScreenPageClient({
	cards,
	layouts,
	items = 1,
	onLayoutChangeX = () => {},
	...props
}) {
	const { isCustomizing } = useContext(ScreenContext);
	
	const [layout, setLayout] = useState(layouts || []);
	// const [cards, setCards] = useState(layouts || []);


  const onLayoutChange = (layout) => {
		// console.log({ layout });
		onLayoutChangeX(layout);
	}

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
						<span className="text">{card.layout.id}</span>
					</Card>
				))}
			</ReactGridLayout>
		</Fragment>
	);
}

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then(fn => fn.default(BasicLayout));
// }