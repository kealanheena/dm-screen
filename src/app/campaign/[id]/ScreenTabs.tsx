"use client"

import React, { useState } from "react";
import { map } from "lodash";

import { Box, Tab, Tabs, Tooltip } from "@mui/material";

import { FullDMScreenType } from "@/types";
import { Add } from "@mui/icons-material";


interface ScreenTabsProps {
	screens: Omit<FullDMScreenType, "sections">[];
}

const ScreenTabs = ({ screens }: ScreenTabsProps) => {
	const [value, setValue] = useState(0);

	const onChangeTab = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);


	return (
		<Box sx={{ width: '100%', bgcolor: 'background.paper', borderTopRightRadius: 20,borderTopLeftRadius: 20 }}>
			<Tabs
				value={value}
				onChange={onChangeTab}
				variant="scrollable"
				scrollButtons="auto"
			>
				<Tooltip title={`Create screen`}>
					<Tab
						key={`screen_tab_create_screen`}
						value={0}
						icon={<Add />}
					/>
				</Tooltip>
				{map(screens, ({ id, title }) => (
					<Tab
						key={`screen_tab_${id}`}
						value={id}
						label={title}
					/>
				))}
			</Tabs>
		</Box>
	)
}

export default ScreenTabs;