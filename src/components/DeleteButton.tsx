"use client"

import React from 'react';

import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface DeleteButtonProps { 
	onClick: Function;
	text?: string;
	tooltip?: string;
	icon?: 'icon_plus_text' | 'icon_only' | 'no_icon';
}

const DeleteButton = ({
	onClick,
	text,
	tooltip,
	icon = 'icon_plus_text',
}: DeleteButtonProps) => {
	
	if (icon === 'icon_only') {
		return (
			<Tooltip title={tooltip}>
				<IconButton 
					color='error'
					onClick={onClick}
				>
					<Delete />
				</IconButton>
			</Tooltip>
		);
	}

	return (
		<Button 
			onClick={onClick}
			variant="outlined"
			color="error"
		>
			<Typography
				sx={{ p: icon !== 'no_icon' ? 0 : 0.5 }}
			>
				{text}
			</Typography>
			{icon !== 'no_icon' && <Delete />}
		</Button>
);
}
export default DeleteButton;