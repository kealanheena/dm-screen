import { find, filter, last, map } from 'lodash';

import { Layout } from '@/types';


const increaseSectionSizeRight = (
	layouts: Layout[],
	layout: Layout,
	range: number[],
	newRange: number[],
) => {
	const { id, start, width } = layout;
	// if start point + width is greater than or equal to 12
	// it is at the end of the sections
	console.log({
		newRange, 
		currentRange: range,
	})
	if ((start + width) >= 12 && (newRange[1] > range[1])) {
		return;
	}

	// if item to right starting point is 11 do not change
	let include = false
	const sectionsToTheRight = filter(layouts, (layout: Layout) => {
		if (include) {
			return true;
		}
		
		if (layout.id === id) {
			include = true;
		}

		return false
	})

	const shrinkableLayout: Layout | undefined = find(sectionsToTheRight, ({ width }) => width > 1);

	if (!shrinkableLayout) {
		return;
	}

	const newLayout = map(layouts, ({ id, ...rest }) => {
		const newWidth = last(newRange) - start;

		if (id !== shrinkableLayout.id && id !== layout.id) {
			return {
				id,
				...rest,
			}
		}

		if (id === layout.id) {
			return {
				...layout,
				width: newWidth,
			};
		}

		if (id === shrinkableLayout.id) {
			const widthDifference = newWidth - width;

			console.log({
				width,
				newWidth,
				shrinkableLayout,
				newStart: newWidth + start,
				testwidth: shrinkableLayout.width - widthDifference
			})

			return {
				...shrinkableLayout,
				start: newWidth + start + 1,
				width: shrinkableLayout.width - widthDifference
			};
		}
	})
	
	
	return newLayout;
}

export default increaseSectionSizeRight;