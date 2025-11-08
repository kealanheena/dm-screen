import {
	find,
	filter,
	reduce,
	some,
	map,
} from 'lodash';

import { Layout } from '@/types';
import { MIN_TOTAL_WIDTH, COLUMN_START } from '@/constants';

import shrinkSectionRight from './shrinkSectionRight';
import expandSectionRight from './expandSectionRight';
import expandSectionLeft from './expandSectionLeft';
import shrinkSectionLeft from './shrinkSectionLeft'


const getTotalWidth = (layouts: Layout[]) => (
	reduce(layouts, (sum, { width }) => (
		sum + width
	), 0)
);


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

	const leftSectionsTotalWidth = getTotalWidth(leftSections);

	const isExpandingTooMuch = leftSectionsTotalWidth <= leftSections.length;

	if (!layoutById) {
		return;
	}

	const { width, start } = layoutById;

	if (isExpandingStart && (start === COLUMN_START || isExpandingTooMuch)) {
		return
	}

	// width + start will always add up to total width
	if (isExpandingEnd && ((width + start) >= MIN_TOTAL_WIDTH)) {
		return;
	}

	if (isShrinkingTooMuch) {
		return;
	}
	let shouldShrinkNextSection = false;
	let shouldExpandNextSection = false;

	// >>>>>>>>Left Side<<<<<<<<
	// This means the the left side is expanding or shrinking
	if (rangeStart !== newRangeStart) {
		const newLayouts = [];
		
		// Expand left
		for (let i = layouts.length -1; i >= 0; i--) {
			const layout = layouts[i];
			// >>>>>>>>Expand Left<<<<<<<<
			if (isExpandingStart) {
				const { newLayout, newShouldShrinkNextSection } = expandSectionLeft({
					layout,
					layoutId,
					shouldShrinkNextSection,
				});

				shouldShrinkNextSection = newShouldShrinkNextSection;

				newLayouts.unshift(newLayout);
				continue;
			}

			// >>>>>>>>Shrink Right<<<<<<<<
			if (!isExpandingStart) {
				const { newLayout, newShouldExpandNextSection} = shrinkSectionLeft({
					layout,
					layoutId,
					shouldExpandNextSection,
				});

				shouldExpandNextSection = newShouldExpandNextSection;

				newLayouts.unshift(newLayout);
				continue;
			}

			newLayouts.unshift(layout);
		}

		// if shouldShrinkNextSection is still true we did not
		// shrink any section.
		// This means the sections where too small to shrink, so
		// return undefines so we don't update sections
		if (shouldShrinkNextSection) {
			return;
		}

		const newTotalWidth = getTotalWidth(newLayouts);
		if (newTotalWidth !== MIN_TOTAL_WIDTH) {
			return;
		}

		return newLayouts;		
	}

	// >>>>>>>>Right Side<<<<<<<<
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

		const newTotalWidth = getTotalWidth(newLayouts);
		if (newTotalWidth !== MIN_TOTAL_WIDTH) {
			return;
		}

		return newLayouts;
	}

	
}

export default onChangeSection;