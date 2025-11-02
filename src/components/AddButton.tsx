import React from 'react';

import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

interface AddButtonProps { 
	onClick: Function;
	text?: string;
	tooltip: string;
	icon?: 'icon_plus_text' | 'icon_only' | 'no_icon';
}

const AddButton = ({
	onClick,
	text,
	tooltip,
	icon = 'icon_plus_text',
}: AddButtonProps) => {
	
	if (icon === 'icon_only') {
		return (
			<Tooltip title={tooltip}>
				<IconButton 
					color='success'
					onClick={onClick}
				>
					<AddCircle />
				</IconButton>
			</Tooltip>
		);
	}

	return (
		<Button 
			onClick={onClick}
			variant="outlined"
			color="success"
		>
			<Typography
				sx={{ p: icon !== 'no_icon' ? 0 : 0.5 }}
			>
				{text}
			</Typography>
			{icon !== 'no_icon' && <AddCircle />}
		</Button>
);
}
export default AddButton;