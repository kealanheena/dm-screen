import onChangeSection from "@/utils/onChangeSection";
import { LayoutType } from '@/types';

describe("#onChangeSection", () => {
	
	it("Should do nothing if start plus width is greater than 12", () => {
		const layouts: LayoutType[] = [{
			id: 1,
			start: 0,
			width: 12,
		}];
		const result = onChangeSection({
			layoutId: 2,
			layouts,
			newRange: [0, 12],
			range: [0, 12],
		});

		expect(result).toEqual(undefined);
	});

	it("Should add 1 to both the width and start of a second layout", () => {
		const layouts: LayoutType[] = [{
			id: 1,
			start: 0,
			width: 9,
		}, {
			id: 2,
			start: 10,
			width: 2,
		}];

		const result = onChangeSection({
			layoutId: 1,
			layouts,
			newRange: [0, 10],
			range: [0, 9],
		});

		expect(result).toStrictEqual([
			{ id: 1, start: 0, width: 10 },
			{ id: 2, start: 11, width: 1 }
		]);
	});

	it("Should add 1 to both the width and start of a second layout", () => {
		const layouts: LayoutType[] = [{
			id: 1,
			start: 0,
			width: 9,
		}, {
			id: 2,
			start: 10,
			width: 2,
		}];

		const result = onChangeSection({
			layoutId: 1,
			layouts,
			newRange: [0, 8],
			range: [0, 9],
		});

		expect(result).toStrictEqual([
			{ id: 1, start: 0, width: 8 }, // correct
			{ id: 2, start: 9, width: 3 }
		]);
	});
});