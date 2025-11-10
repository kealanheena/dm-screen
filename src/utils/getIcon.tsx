import {
	AddCircleOutline,
	CreateNewFolder,
	Check,
	Delete,
	FolderDelete,
	DragIndicator,
	Edit,
	QuestionMark,
	Settings,
	NoteAdd,
} from '@mui/icons-material';

export type IconType = 'ADD'
	| 'ADD_SECTION'
	| 'ADD_CARD'
	| 'CHECK'
	| 'EDIT'
	| 'DELETE'
	| 'DELETE_SECTION'
	| 'DRAG'
	| 'SETTINGS';


const getIcon = (
	icon: IconType
): React.JSX.Element => {
		switch (icon) {
			case 'ADD':
				return <AddCircleOutline />
			case 'ADD_SECTION':
				return <CreateNewFolder />
			case 'ADD_CARD':
				return <NoteAdd />
			case 'CHECK':
				return <Check />
			case 'EDIT':
				return <Edit />
			case 'DELETE':
				return <Delete />
			case 'DELETE_SECTION':
				return <FolderDelete />
			case 'DRAG':
				return <DragIndicator />
			case 'SETTINGS':
				return <Settings />
			default:
				return <QuestionMark />
		}
};

export default getIcon;