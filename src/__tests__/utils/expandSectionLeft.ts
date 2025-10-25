import expandSectionLeft from '@/utils/expandSectionLeft';
import { Layout } from '@/types';

describe("#expandSectionLeft", () => {
	
	it("Should return layout with increased width and a true newShouldShrinkNextSection", () => {
		const layout: Layout = {
			id: 1,
			start: 5,
			width: 9,
		};
		const result = expandSectionLeft({
			layoutId: 1,
			layout,
			shouldShrinkNextSection: false,
		});

		expect(result).toStrictEqual({
			newLayout: {
				id: 1,
				start: 4,
				width: 10,
			}, 
			newShouldShrinkNextSection: true,
		});
	});
});