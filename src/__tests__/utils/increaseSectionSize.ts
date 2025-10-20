import { head, last } from 'lodash';

import increaseSectionSizeRight from "@/utils/increaseSectionSizeRight";
import { Layout } from '@/types';

describe("#increaseSectionSizeRight", () => {
	
	it("Should do nothing if start plus width is greater than 12", () => {
		let layouts: Layout[] = [{
			id: 1,
			start: 0,
			width: 12,
		}];
		const result = increaseSectionSizeRight({
			layoutId: 2,
			layouts,
		});

		expect(result).toEqual(undefined);
	});

	it("Should do nothing if start plus width is greater than 12", () => {
		const layouts: Layout[] = [{
			id: 1,
			start: 0,
			width: 9,
		}, {
			id: 2,
			start: 10,
			width: 2,
		}];

		const result = increaseSectionSizeRight({
			layoutId: 1,
			layouts,
		});

		expect(result).toStrictEqual([
			{ id: 1, start: 0, width: 10 }, // correct
			{ id: 2, start: 11, width: 1 }
		]);
	});
});