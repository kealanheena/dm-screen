import { find, filter, last, map } from 'lodash';

import { Layout } from '@/types';

const MAXCOLUMN = 12;

const increaseSectionSizeRight = ({
	layoutId,
	layouts,
}: {
	layoutId: number,
	layouts: Layout[],
}): Layout[] | undefined => {
	const expandingLayout = find(layouts, ['id', layoutId])

	if (!expandingLayout) {
		return;
	}

	let doesSectionHaveToBeDecreased = false;

	const newLayout = map(layouts, (layout) => {
		const { id, start, width } = layout;

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

	if (doesSectionHaveToBeDecreased) {
		return;
	}

	return newLayout;
}

export default increaseSectionSizeRight;