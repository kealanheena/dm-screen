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

	if (expandingLayout.start + expandingLayout?.width >= MAXCOLUMN) {
		return;
	}

	let isRightOfExpandingSection = false;

	const newLayout = map(layouts, (layout) => {
		const { id, start, width } = layout;

		if (isRightOfExpandingSection) {
			return {
				...layout,
				width: width - 1,
				start: start + 1,
			}
		}

		if (id === layoutId) {
			isRightOfExpandingSection = true;

			return {
				...layout,
				width: width + 1,
			}
		}

		return layout;
	});

	return newLayout;
}

export default increaseSectionSizeRight;