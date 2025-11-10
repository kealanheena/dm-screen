import {
	AddCircleOutline,
	PostAdd,
	Check,
	Delete,
	DragIndicator,
	Edit,
	QuestionMark,
	Settings,
	AddToPhotos,
} from '@mui/icons-material';

export type IconType = 'ADD' | 'ADD_SECTION' | 'ADD_CARD' | 'CHECK' | 'EDIT' | 'DELETE' | 'DRAG' | 'SETTINGS';


const getIcon = (
	icon: IconType
): React.JSX.Element => {
		switch (icon) {
			case 'ADD':
				return <AddCircleOutline />
			case 'ADD_SECTION':
				return <PostAdd />
			case 'ADD_CARD':
				return <AddToPhotos />
			case 'CHECK':
				return <Check />
			case 'EDIT':
				return <Edit />
			case 'DELETE':
				return <Delete />
			case 'DRAG':
				return <DragIndicator />
			case 'SETTINGS':
				return <Settings />
			default:
				return <QuestionMark />
		}
};

export default getIcon;