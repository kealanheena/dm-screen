import { Layout } from "@/types";

const shrinkSectionRight = ({
	layout,
	layoutId,
	shouldExpandNextSection,
}: {
	layout: Layout,
	layoutId: number,
	shouldExpandNextSection: boolean,
}): {
	newLayout: Layout,
	newShouldExpandNextSection: boolean,
} => {
	const { id, start, width } = layout;

	if (shouldExpandNextSection) {
		const newLayout = {
			...layout,
			start: start - 1,
			width: width + 1,
		};

		return {
			newLayout,
			newShouldExpandNextSection: false,
		}
	}

	if (id === layoutId) {
		const newLayout = {
			...layout,
			width: width - 1,
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