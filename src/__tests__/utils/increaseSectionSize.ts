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
			newRange: 12,
			range: 12,
		});

		expect(result).toEqual(undefined);
	});

	it("Should add 1 to both the width and start of a second layout", () => {
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
			newRange: 10,
			range: 9,
		});

		expect(result).toStrictEqual([
			{ id: 1, start: 0, width: 10 },
			{ id: 2, start: 11, width: 1 }
		]);
	});

	it("Should add 1 to both the width and start of a second layout", () => {
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
			newRange: 8,
			range: 9,
		});

		expect(result).toStrictEqual([
			{ id: 1, start: 0, width: 8 }, // correct
			{ id: 2, start: 9, width: 3 }
		]);
	});
});