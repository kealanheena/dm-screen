import { LayoutType } from "@/types";
import { WIDTHCHANGEINTERVAL, MINCOLUMNWIDTH } from '@/constants';


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

	// if (width > MINCOLUMNWIDTH) {

	if (shouldExpandNextSection) {
		const newLayout = {
			...layout,
			start: start - WIDTHCHANGEINTERVAL,
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