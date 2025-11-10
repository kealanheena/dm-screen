import { Screen } from "@/types";
import { MIN_COLUMN_WIDTH, WIDTH_CHANGE_INTERVAL } from '@/constants';


const shrinkSectionRight = ({
	layout,
	layoutId,
	shouldExpandNextSection,
}: {
	layout: Screen,
	layoutId: number,
	shouldExpandNextSection: boolean,
}): {
	newLayout: Screen,
	newShouldExpandNextSection: boolean,
} => {
	const { id, start, width } = layout;

	if (shouldExpandNextSection) {
		const newLayout = {
			...layout,
			// start: start - WIDTH_CHANGE_INTERVAL,
			width: width + WIDTH_CHANGE_INTERVAL,
		};

		return {
			newLayout,
			newShouldExpandNextSection: false,
		}
	}

	if (id === layoutId && width > MIN_COLUMN_WIDTH) {
		const newLayout = {
			...layout,
			width: width - WIDTH_CHANGE_INTERVAL,
			start: start + WIDTH_CHANGE_INTERVAL,
		};

		return {
			newLayout,
			newShouldExpandNextSection: true,
		}
	}

	return {
		newLayout: layout,
		newShouldExpandNextSection: shouldExpandNextSection,
	};
}

export default shrinkSectionRight;