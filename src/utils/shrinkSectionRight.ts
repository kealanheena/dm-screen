import { LayoutType } from "@/types";

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

	console.log({ test: 'test' });
	console.log({
		layout, 
		layoutId,
	});

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