import expandSectionRight from '@/utils/expandSectionRight';
import { LayoutType } from '@/types';

describe("#expandSectionRight", () => {
	
	it("Should return layout with increased width and a true newShouldShrinkNextSection", () => {
		const layout: LayoutType = {
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