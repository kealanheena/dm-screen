import {
	find,
	filter,
	last,
	reduce,
	reverse,
	some,
	map,
} from 'lodash';

import { Layout } from '@/types';
import shrinkSectionRight from './shrinkSectionRight';
import expandSectionRight from './expandSectionRight';
import expandSectionLeft from './expandSectionLeft';

const MAXCOLUMNAMOUNT = 12;
const COLUMNSTART = 0;

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

	const isExpandingStart = newRangeStart < rangeStart;
	const isExpandingEnd = newRangeEnd > rangeEnd;

	const layoutById = find(layouts, ['id', layoutId])

	const isShrinkingTooMuch = some(
		layouts,
		({ id, start }: Layout) => (
			start === newRangeEnd && id === layoutId
		)
	)

	// 1. Get all sections to the left
	// 2. check the combined width
	// 3. if length is equal to or less than combined width
			// this means all the sections have width of 1
	// 4. do not expand
	// sections to the lest of LayoutId
	let isLeft = true;
	const leftSections = filter(layouts, ({ id }) => {
		if (id === layoutId) {
			isLeft = false;
			return false;
		}

		return isLeft ? true : false
	});

	const leftSectionsTotalWidth = reduce(leftSections, (sum, { width }) => (
		sum + width
	), 0);

	const isExpandingTooMuch = leftSectionsTotalWidth <= leftSections.length;

	console.log({ isExpandingTooMuch });

	if (!layoutById) {
		return;
	}

	const { width, start } = layoutById;

	if (isExpandingStart && (start === COLUMNSTART || isExpandingTooMuch)) {
		return
	}

	if (isExpandingEnd && ((width + start) >= MAXCOLUMNAMOUNT)) {
		return;
	}

	if (isShrinkingTooMuch) {
		return;
	}
	let shouldShrinkNextSection = false;
	let shouldExpandNextSection = false;

	// This means the the left side is expanding or shrinking
	if (rangeStart !== newRangeStart) {

		
		// Expand left
		const newLayouts = map(reverse(layouts), (layout, index) => {
			// >>>>>>>>Expand Right<<<<<<<<
			if (isExpandingStart) {
				const { newLayout, newShouldShrinkNextSection } = expandSectionLeft({
					layout,
					layoutId,
					shouldShrinkNextSection,
				});

				shouldShrinkNextSection = newShouldShrinkNextSection;

				return newLayout;
			}

		// 	// >>>>>>>>Shrink Left<<<<<<<<
		// 	if (!isExpandingStart) {
		// 		const { newLayout, newShouldExpandNextSection} = shrinkSectionRight({
		// 			layout,
		// 			layoutId,
		// 			shouldExpandNextSection,
		// 		});

		// 		shouldExpandNextSection = newShouldExpandNextSection;

		// 		return newLayout;
		// 	}

		// 	return layout;
		});

		// // if shouldShrinkNextSection is still true we did not
		// // shrink any section.
		// // This means the sections where too small to shrink, so
		// // return undefines so we don't update sections
		// if (shouldShrinkNextSection) {
		// 	return;
		// }

		return reverse(newLayouts);		
	}

	// This means the the right side is expanding or shrinking
	if (rangeEnd !== newRangeEnd) {
		const newLayouts = map(layouts, (layout) => {
			// >>>>>>>>Expand Right<<<<<<<<
			if (isExpandingEnd) {
				const { newLayout, newShouldShrinkNextSection } = expandSectionRight({
					layout,
					layoutId,
					shouldShrinkNextSection,
				});

				shouldShrinkNextSection = newShouldShrinkNextSection;

				return newLayout;
			}

			// >>>>>>>>Shrink Left<<<<<<<<
			if (!isExpandingEnd) {
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