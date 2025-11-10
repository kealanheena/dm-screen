import React, { MouseEventHandler } from 'react';

import { Button, IconButton, Tooltip, Typography } from '@mui/material';

import getIcon, { IconType } from '@/utils/getIcon';

interface IconButtonProps {
	icon: IconType;
	onClick: MouseEventHandler;
	text?: string;
	tooltip?: string;
	variant?: 'icon_plus_text' | 'icon_only' | 'no_icon';
	disabled?: boolean;
}


const IconButtonComponent = ({
	icon,
	onClick,
	text,
	tooltip,
	variant = 'icon_plus_text',
	disabled,
}: IconButtonProps) => {	
	if (variant === 'icon_only') {
		return (
			<Tooltip title={tooltip}>
				<IconButton onClick={onClick} disabled={disabled}>
					{getIcon(icon)}
				</IconButton>
			</Tooltip>
		);
	}

	return (
		<Button onClick={onClick} variant="outlined" disabled={disabled}>
			<Typography sx={{ p: variant !== 'no_icon' ? 0 : 0.5 }}>
				{text}
			</Typography>
			{variant !== 'no_icon' && getIcon(icon)}
		</Button>
	);
}

export default IconButtonComponent;