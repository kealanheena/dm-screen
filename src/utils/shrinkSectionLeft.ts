import { LayoutType } from "@/types";
import { MINCOLUMNWIDTH, WIDTHCHANGEINTERVAL } from '@/constants';


const shrinkSectionRight = ({
	layout,
	layoutId,
	shouldExpandNextSection,
}: {
	layout: LayoutType,
	layoutId: number,
	shouldExpandNextSection: boolean,
}): {
	newLayout: LayoutType,
	newShouldExpandNextSection: boolean,
} => {
	const { id, start, width } = layout;

	if (shouldExpandNextSection) {
		const newLayout = {
			...layout,
			// start: start - WIDTHCHANGEINTERVAL,
			width: width + WIDTHCHANGEINTERVAL,
		};

		return {
			newLayout,
			newShouldExpandNextSection: false,
		}
	}

	if (id === layoutId && width > MINCOLUMNWIDTH) {
		const newLayout = {
			...layout,
			width: width - WIDTHCHANGEINTERVAL,
			start: start + WIDTHCHANGEINTERVAL,
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