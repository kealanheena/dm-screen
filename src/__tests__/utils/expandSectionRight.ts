import { head, last } from 'lodash';

import expandSectionRight from '@/utils/expandSectionRight';
import { Layout } from '@/types';

describe("#increaseSectionSizeRight", () => {
	
	it("Should return layout with increased widthb and a true newShouldShrinkNextSection", () => {
		let layout: Layout = {
			id: 1,
			start: 0,
			width: 9,
		};
		const result = expandSectionRight({
			layoutId: 1,
			layout,
			shouldShrinkNextSection: false,
		});

		expect(result).toStrictEqual({
			newLayout: {
				id: 1,
				start: 0,
				width: 10,
			}, 
			newShouldShrinkNextSection: true,
		});
	});
});