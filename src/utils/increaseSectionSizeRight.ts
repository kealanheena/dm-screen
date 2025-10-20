import { find, filter, last, reduce, map } from 'lodash';

import { Layout } from '@/types';

const MAXCOLUMN = 12;

const increaseSectionSizeRight = ({
	layoutId,
	layouts,
	newRange,
	range,
}: {
	layoutId: number,
	layouts: Layout[],
	newRange: number,
	range: number,
}): Layout[] | undefined => {
	const isExpanding = newRange > range;

	const expandingLayout = find(layouts, ['id', layoutId])

	if (!expandingLayout) {
		return;
	}

	let doesSectionHaveToBeDecreased = false;

	const newLayouts = map(layouts, (layout) => {
		const { id, start, width } = layout;

		// if (!isExpanding) {
		// 	if (id === layoutId) {

		// 		if (start === 0 && width <= 1) {
		// 			return layout;
		// 		}
				
		// 		doesSectionHaveToBeDecreased = true;

		// 		return {
		// 			...layout,
		// 			width: width - 1,
		// 		}
		// 	}

		// 	return layout;
		// }
		// Has there been a decrease in a different section to
		// account for the increase in the changed layout so that
		// all sections width add up to a total of 12
		if (doesSectionHaveToBeDecreased) {
			if (width <= 1) {
				return {
					...layout,
					start: start + 1,
				};
			}

			doesSectionHaveToBeDecreased = false;
			
			return {
				...layout,
				width: width - 1,
				start: start + 1,
			}
		}

		if (id === layoutId) {
			doesSectionHaveToBeDecreased = true;

			return {
				...layout,
				width: width + 1,
			}
		}

		return layout;
	});

	return newLayouts;

	if (doesSectionHaveToBeDecreased) {
		return;
	}

	return newLayouts;
}

export default increaseSectionSizeRight;