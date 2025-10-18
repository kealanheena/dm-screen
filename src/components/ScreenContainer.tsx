"use client";

import React, { useState } from 'react';

import { Card, CardContent } from "./ui/card";
import { map, filter } from 'lodash';
import { Button } from './ui/button';
import { PlusIcon, Trash2Icon, Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import ScreenCard from './ScreenCard';

function ScreenContainer() {
	const [isDeleting, setIsDeleting] = useState(false);
	const [columns, setColumns] = useState([
		{
			id: 1,
			cards: [{
				title: 'New Title',
				description: 'This is a description'
			}]
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

	const onClickRemoveColumn = (columnId: number) => () => {
		setIsDeleting(true);

		if (isDeleting) {
			setIsDeleting(false);
			return;
		}
		if (columns.length <= 1) {
			toast.error("You must have at least one column")
			setIsDeleting(false);
			return;
		}

		const newArray = filter(columns, ({ id }) => id !== columnId)

		setColumns(newArray);
		setIsDeleting(false);
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
					<ScreenCard
						key={index}
						onClickDelete={onClickRemoveColumn(column.id)}
						isDeleting={isDeleting}	
					/>
				))}
			</div>
    </div>
	)
}

export default ScreenContainer;