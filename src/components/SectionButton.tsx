import React, { useContext } from 'react';
import { capitalize } from 'lodash';
import { useParams, useRouter } from 'next/navigation';

import { IconButton, Tooltip, IconButtonProps } from '@mui/material';
import { PlaylistAdd, PlaylistRemove } from '@mui/icons-material';

import { createSection, deleteSection } from '@/actions/section.action';
import { ScreenContext } from '@/app/context';

interface SectionButtonProps extends IconButtonProps {
  sectionAction: 'ADD' | 'DELETE';
}

const SectionButton = ({ sectionAction, ...props }: SectionButtonProps) => {
	const { id } = useParams();
	const { refresh } = useRouter();
	const { selectedSection } = useContext(ScreenContext);

	const sectionActionLowercase = capitalize(sectionAction);

	const handleCreateSection = async () => createSection(
		Number(id),
		// { start: 0, width: 12 }
	);

	const handleDeleteSection = async () => {
		if (!selectedSection) {
			return;
		}

		await deleteSection(selectedSection.id);
	};

	return (
		<Tooltip title={`${sectionActionLowercase} section`}>
			<IconButton
				onClick={async () => {
					if (sectionAction === 'ADD') {
						await handleCreateSection();
					}
					if (sectionAction === 'DELETE') {
						await handleDeleteSection();
					}
					
					refresh();
				}}
				color={sectionAction === 'ADD' ? 'default' : 'error'}
				{...props}
			>
				{sectionAction === 'ADD' ? <PlaylistAdd /> : <PlaylistRemove />}
			</IconButton>
		</Tooltip>
	);
}

export default SectionButton;