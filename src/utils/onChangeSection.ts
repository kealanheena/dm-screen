import {
	find,
	filter,
	last,
	reduce,
	some,
	map,
} from 'lodash';

import { Layout } from '@/types';
import shrinkSectionRight from './shrinkSectionRight';
import expandSectionRight from './expandSectionRight';

const MAXCOLUMNAMOUNT = 12;

const onChangeSection = ({
	layoutId,
	layouts,
	newRange,
	range,
}: {
	layoutId: number,
	layouts: Layout[],
	newRange: number[],
	range: number[],
}): Layout[] | undefined => {
	const [rangeStart, rangeEnd] = range;
	const [newRangeStart, newRangeEnd] = newRange;
	const isExpanding = newRangeEnd > rangeEnd;
	const layoutById = find(layouts, ['id', layoutId])

	const isShrinkingTooMuch = some(
		layouts,
		({ id, start }: Layout) => (
			start === newRangeEnd && id === layoutId
		)
	)

	if (!layoutById) {
		return;
	}

	const { width, start } = layoutById;

	if ((width + start) >= MAXCOLUMNAMOUNT) {
		return;
	}

	if (isShrinkingTooMuch) {
		return;
	}

	if (range !== newRange) {
		let shouldShrinkNextSection = false;
		let shouldExpandNextSection = false;

		const newLayouts = map(layouts, (layout) => {
			// >>>>>>>>Expand Right<<<<<<<<
			if (isExpanding) {
				const { newLayout, newShouldShrinkNextSection } = expandSectionRight({
					layout,
					layoutId,
					shouldShrinkNextSection,
				});

				shouldShrinkNextSection = newShouldShrinkNextSection;

				return newLayout;
			}

			// >>>>>>>>Shrink Left<<<<<<<<
			if (!isExpanding) {
				const { newLayout, newShouldExpandNextSection} = shrinkSectionRight({
					layout,
					layoutId,
					shouldExpandNextSection,
				});

				shouldExpandNextSection = newShouldExpandNextSection;

				return newLayout;
			}

			return layout;
		});

		// if shouldShrinkNextSection is still true we did not
		// shrink any section.
		// This means the sections where too small to shrink, so
		// return undefines so we don't update sections
		if (shouldShrinkNextSection) {
			return;
		}

		return newLayouts;

	}

	
}

export default onChangeSection;