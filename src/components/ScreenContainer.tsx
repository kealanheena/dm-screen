"use client";

import React, { useState } from 'react';

import { Card, CardContent } from "./ui/card";
import { map, slice, filter, remove } from 'lodash';
import { Button } from './ui/button';
import { PlusIcon } from 'lucide-react';
import toast from 'react-hot-toast';

function ScreenContainer() {
	const [columns, setColumns] = useState([
		{
			id: 1,
			cards: []
		},
		{
			id: 2,
			cards: []
		},
		{
			id: 3,
			cards: []
		},
	]);

	const onClickAddColumn = () => {
		if (columns.length >= 4) {
			toast.error("Cannot have more than 4 columns")
			return;
		}

		setColumns([
			...columns,
			{ 
				id: columns.length + 1, 
				cards: [],
			}
		]);
	}

	const onClickRemoveColumn = (index: number) => () => {
		if (columns.length <= 1) {
			toast.error("You must have at least one column")
			return;
		}

		const newArray = filter(columns, ({ id }) => id !== index)

		setColumns(newArray);
	}

	return (
		<div className={`flex justify-items-center flex-col w-full`}>
			<div className={`flex w-full py-6`}>
				<Button onClick={onClickAddColumn}>
					<PlusIcon />
					Add Column
				</Button>
				
			</div>
			
			<div className={`flex flex-row h-full w-full`}>
				{map(columns, (column, index) => (
					<div className={`flex-2 h-full mx-1 bg-${index % 2 === 0 ? 'amber' : 'emerald'}-700`}>
						Testung
						<Button onClick={onClickRemoveColumn(index)}>
							Remove Column
						</Button>
					</div>
				))}
			</div>
    </div>
	)
}

export default ScreenContainer;