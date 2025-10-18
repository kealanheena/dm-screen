"use client";

import React, { useState } from 'react';

import { Card, CardContent, CardTitle } from "./ui/card";
import { map, filter } from 'lodash';
import { Button } from './ui/button';
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon, Trash2Icon, Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import { Input } from './ui/input';
import { Label } from './ui/label';

function ScreenCard({ onClickDelete, isDeleting }) {
	const [ratio, setRatio] = useState(1);

	const increaseRatio = () => {
		setRatio(ratio + 1)
	}

	const decreaseRatio = () => {
		setRatio(ratio - 1)
	}


	return (
		<Card className={`flex-${ratio} h-full mx-1`}>
				<div className="flex justify-between m-0 p-0">
					<Button
						variant="ghost"
						size="sm"
						className="text-muted-foreground hover:text-green-500"
						onClick={decreaseRatio}
					>
						<ArrowLeftFromLineIcon className='size-4' />
					</Button>
					<Label>Ratio: {ratio}</Label>
					<Button
						variant="ghost"
						size="sm"
						className="text-muted-foreground hover:text-green-500"
						onClick={increaseRatio}
					>
						<ArrowRightFromLineIcon className='size-4' />
					</Button>
				</div>

				<CardTitle className='flex flex-row justify-between items-center mx-6'>
					Test
					<Button
						variant="ghost"
						size="sm"
						className="text-muted-foreground hover:text-red-500 -mr-2"
						onClick={onClickDelete}
					>
						{isDeleting ? <Loader2Icon className="size-4 animate-spin" /> : <Trash2Icon className="size-4" />}
					</Button>
				</CardTitle>

			<CardContent>Test test test</CardContent>
		</Card>
	)
}

export default ScreenCard;