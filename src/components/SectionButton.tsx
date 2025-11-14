import React from 'react';
import { capitalize } from 'lodash';

import { IconButton, Tooltip } from '@mui/material';

import { PlaylistAdd, PlaylistRemove } from '@mui/icons-material';

interface SectionButtonProps {
  type: 'ADD' | 'DELETE';
}

const SectionButton = ({ type, ...props }: SectionButtonProps) => {
	const typeLowercase = capitalize(type);

	const addSection = () => {};
	const deleteSection = () => {};

	return (
		<Tooltip title={`${typeLowercase} section`}>
			<IconButton
				onClick={type === 'ADD' ? addSection : deleteSection}
				color={type === 'ADD' ? 'default' : 'error'}
				{...props}
			>
				{type === 'ADD' ? <PlaylistAdd /> : <PlaylistRemove />}
			</IconButton>
		</Tooltip>
	);
}

export default SectionButton;