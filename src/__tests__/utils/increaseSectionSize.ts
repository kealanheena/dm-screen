import { head, last } from 'lodash';

import increaseSectionSizeRight from "@/utils/increaseSectionSizeRight";
import { Layout } from '@/types';

describe("#increaseSectionSizeRight", () => {
	let layouts: Layout[] = [];

	beforeAll(() => {
		layouts = [{
			id: 1,
			start: 0,
			width: 9,
		}, {
			id: 2,
			start: 10,
			width: 2,
		}];
	});
	
	it("Should do nothing if start plus width is greater than 12", () => {
		const layout = {
			id: 2,
			start: 10,
			width: 2,
		};
		const result = increaseSectionSizeRight(
			layouts,
			layout,
			[10, 12],
		);

		expect(result).toEqual(undefined);
	});

	it.only("Should do nothing if start plus width is greater than 12", () => {
		const layout = {
			id: 1,
			start: 0,
			width: 9,
		}
		const result = increaseSectionSizeRight(
			layouts,
			layout,
			[0, 10],
		);

		expect(result).toStrictEqual([
			{ id: 1, start: 0, width: 10 }, // correct
			{ id: 2, start: 11, width: 1 }
		]);
	});
});