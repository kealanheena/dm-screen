import React from 'react';
import { capitalize } from 'lodash';

import { IconButton, Tooltip } from '@mui/material';

import { PlaylistAdd, PlaylistRemove } from '@mui/icons-material';
import { useParams, useRouter } from 'next/navigation';
import { createSection, deleteSection } from '@/actions/section.action';

interface SectionButtonProps {
  type: 'ADD' | 'DELETE';
}

const SectionButton = ({ type, ...props }: SectionButtonProps) => {
	const { id } = useParams();
	const { refresh } = useRouter();

	const typeLowercase = capitalize(type);

	const handleCreateSection = async () => createSection(
		Number(id),
		{ start: 0, width: 12 }
	);

	const handleDeleteSection = async () => deleteSection(Number(id));

	return (
		<Tooltip title={`${typeLowercase} section`}>
			<IconButton
				onClick={async () => {
					if (type === 'ADD') {
						await handleCreateSection();
					}
					if (type === 'DELETE') {
						await handleDeleteSection();
					}
					
					refresh();
				}}
				color={type === 'ADD' ? 'default' : 'error'}
				{...props}
			>
				{type === 'ADD' ? <PlaylistAdd /> : <PlaylistRemove />}
			</IconButton>
		</Tooltip>
	);
}

export default SectionButton;