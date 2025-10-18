"use client";

import React, { useState } from 'react';

import { Card, CardContent, CardTitle } from "./ui/card";
import { map, filter } from 'lodash';
import { Button } from './ui/button';
import { PlusIcon, Trash2Icon, Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';

function ScreenCard({ onClickDelete, isDeleting }) {


	return (
		<Card className='flex-1 h-full mx-1'>
			{/* <div > */}
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
			{/* </div> */}

			<CardContent>Test test test</CardContent>
		</Card>
	)
}

export default ScreenCard;