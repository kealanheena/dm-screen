'use client'

import React, { Fragment, useState, useContext } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import { FullDMScreenType } from '@/types'
import { ScreenContext } from '@/app/context'

import './styles.css'

const ReactGridLayout = WidthProvider(RGL);

export default function BasicLayout({
	className = 'layout',
	items = 2,
	rowHeight = 30,
	onLayoutChangeX = () => {},
	cols = 12,
	...props
}) {
	const [layout, setLayout] = useState([]);
	// const [screen, setScreen] = useState<FullDMScreenType>(initialScreen);
	const {
		isCustomizing,
		selectedSection,
		setSelectedSection
	} = useContext(ScreenContext);
	// const [items, setItems] = useState(itemsProps);
  // constructor(props) {
  //   super(props);

  //   const layout = this.generateLayout();
  //   this.state = { layout };
  // }

  const generateDOM = () => {
    return _.map(_.range(items), function(i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  const onLayoutChange = (layout) => {
		console.log({ layout });
		onLayoutChangeX(layout);
	}

	return (
		<Fragment>
			{!layout ? (
				<div />
			) : (
				<ReactGridLayout
					layout={layout}
					onLayoutChange={onLayoutChange}
					{...props}
				>
					{generateDOM()}
				</ReactGridLayout>
			)}
			
		</Fragment>
	);
}

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then(fn => fn.default(BasicLayout));
// }