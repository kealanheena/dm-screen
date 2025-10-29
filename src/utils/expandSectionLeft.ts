import { LayoutType } from "@/types";
import { MINCOLUMNWIDTH, WIDTHCHANGEINTERVAL } from '@/constants';


const expandSectionLeft = ({
	layout,
	layoutId,
	shouldShrinkNextSection,
}: {
	layout: LayoutType,
	layoutId: number,
	shouldShrinkNextSection: boolean,
}): {
	newLayout: LayoutType,
	newShouldShrinkNextSection: boolean,
} => {
	const { id, start, width } = layout;

	// Has there been a decrease in a different section to
	// account for the increase in the changed layout so that
	// all sections width add up to a total of 12
	if (shouldShrinkNextSection) {
		const newLayout = {
			...layout,
			// start: start - WIDTHCHANGEINTERVAL,
		};

		if (width <= MINCOLUMNWIDTH) {
			return {
				newLayout: {
					...layout,
					start: start - WIDTHCHANGEINTERVAL,
				},
				newShouldShrinkNextSection: shouldShrinkNextSection,
			}
		}
		
		return {
			newLayout: {
				...newLayout,
				width: width - WIDTHCHANGEINTERVAL,
			},
			newShouldShrinkNextSection: false,
		}
	}

	if (id === layoutId) {
		const newLayout = {
			...layout,
			start: start - WIDTHCHANGEINTERVAL,
			width: width + WIDTHCHANGEINTERVAL,
		}

		return {
			newLayout,
			// We want to shrink a section to the right of the
			// expanded section to account for the expansion
			newShouldShrinkNextSection: true,
		};
	}

	return {
		newLayout: layout,
		newShouldShrinkNextSection: shouldShrinkNextSection,
	}

}

export default expandSectionLeft;