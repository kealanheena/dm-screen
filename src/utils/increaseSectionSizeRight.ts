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
	const layoutById = find(layouts, ['id', layoutId])
	const isShrinkingTooMuch = some(
		layouts,
		({ id, start }: Layout) => (
			start === newRange && id === layoutId
		)
	)

	if (!layoutById) {
		return;
	}

	if (isShrinkingTooMuch) {
		return;
	}

	let shouldShrinkNextSection = false;
	let shouldExpandNextSection = false;

	const newLayouts = map(layouts, (layout) => {
		const { id, start, width } = layout;

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

		// >>>>>>>>Expand Right<<<<<<<<

		// Has there been a decrease in a different section to
		// account for the increase in the changed layout so that
		// all sections width add up to a total of 12
		if (shouldShrinkNextSection) {
			if (width <= 1) {
				return {
					...layout,
					start: start + 1,
				};
			}

			// Once one section shrinks no other sections have to
			// shrink
			shouldShrinkNextSection = false;
			
			return {
				...layout,
				width: width - 1,
				start: start + 1,
			}
		}

		if (id === layoutId) {
			// We want to shrink a section to the right of the
			// expanded section to account for the expansion
			shouldShrinkNextSection = true;

			return {
				...layout,
				width: width + 1,
			}
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

export default increaseSectionSizeRight;