"use client";

import React, { useState } from 'react';

import { Card, CardContent } from "./ui/card";
import { Button } from './ui/button';

function ScreenContainer() {
	const [columns, setColumns] = useState([[], [], []]);

	const onClickAddColumn = () => {
		setColumns([...columns, []])
	}

	return (
		<div className={`flex flex-col w-full`}>
			<Button
				onClick={onClickAddColumn}
			>
				Add Column
			</Button>
			<Button
				onClick={onClickAddColumn}
			>
				Remove Column
			</Button>
			<div className={`flex flex-row h-full w-full`}>
				{columns.map((column, index) => (
					<div className={`flex-2 h-full mx-1 bg-${index % 2 === 0 ? 'amber' : 'emerald'}-700`}>

					</div>
				))}
			</div>
    </div>
	)
}

export default ScreenContainer;