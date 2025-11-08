import { AddCircleOutline, Check, Delete, DragIndicator, Edit, QuestionMark, Settings } from '@mui/icons-material';

export type IconType = 'ADD' | 'CHECK' | 'EDIT' | 'DELETE' | 'DRAG' | 'SETTINGS';

const getIcon = (
	icon: IconType
): React.JSX.Element => {
		switch (icon) {
			case 'ADD':
				return <AddCircleOutline />
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