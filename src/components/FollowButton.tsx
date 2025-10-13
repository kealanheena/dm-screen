"use client"

import React, { useState } from "react"
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

function FollowButton({ userId }: { userId: number }) {
	const [isLoading, setIsLoading] = useState(false);

	const onClickFollow = async () => {
		setIsLoading(true);

		try {
			await toggleFollow(userId)
		} catch (error) {

		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Button 
			size='sm'
			variant='secondary'
			onClick={onClickFollow}
			disabled={isLoading}
			className='w-20'
		>
			{isLoading ? <Loader2Icon className="size-4 animate-spin"/> : 'Follow'}
		</Button>
	)
}

export default FollowButton