import { filter } from 'lodash';

import { Layout } from '@/types';


const increaseSectionSizeRight = (
	layouts: Layout[],
	{ id, start, width }: Layout,
	newRange: number[],
) => {
	// if start point + width is greater than or equal to 12
	// it is at the end of the sections
	if ((start + width) >= 12) {
		return;
	}
}
export default increaseSectionSizeRight;