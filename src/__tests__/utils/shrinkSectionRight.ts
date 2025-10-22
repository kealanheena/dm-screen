import shrinkSectionRight from '@/utils/shrinkSectionRight';
import { Layout } from '@/types';

describe("#increaseSectionSizeRight", () => {
	
	it("Should return layout with decreased width and a true shouldExpandNextSection", () => {
		let layout: Layout = {
			id: 1,
			start: 0,
			width: 9,
		};
		const result = shrinkSectionRight({
			layoutId: 1,
			layout,
			shouldExpandNextSection: false,
		});

		expect(result).toStrictEqual({
			newLayout: {
				id: 1,
				start: 0,
				width: 8,
			}, 
			newShouldExpandNextSection: true,
		});
	});
});