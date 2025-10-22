import { Layout } from "@/types";

const expandSectionRight = ({
	layout,
	layoutId,
	shouldShrinkNextSection,
}: {
	layout: Layout,
	layoutId: number,
	shouldShrinkNextSection: boolean,
}): {
	newLayout: Layout,
	newShouldShrinkNextSection: boolean,
} => {
	const { id, start, width } = layout;

	// Has there been a decrease in a different section to
	// account for the increase in the changed layout so that
	// all sections width add up to a total of 12
	if (shouldShrinkNextSection) {
		const newLayout = {
			...layout,
			start: start + 1,
		};

		if (width <= 1) {
			return {
				newLayout,
				newShouldShrinkNextSection: shouldShrinkNextSection,
			}
		}
		
		return {
			newLayout: {
				...newLayout,
				width: width - 1,
			},
			newShouldShrinkNextSection: false,
		}
	}

	if (id === layoutId) {
		const newLayout = {
			...layout,
			width: width + 1,
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

export default expandSectionRight;