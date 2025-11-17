import onChangeSection from "@/utils/onChangeSection";
import { SectionType } from '@/types';

describe.only("#onChangeSection", () => {

	let section1: SectionType,
			section2: SectionType,
			section3: SectionType,
			section4: SectionType;

	beforeAll(() => {
		section1 = {
			id: 1,
			start: 0,
			width: 3,
		}

		section2 = {
			id: 2,
			start: 3,
			width: 3,
		}
	});

	describe('If a sections array has only 1 section', () => {
		it("Should not change if start + width is 12", () => {
			const sections: SectionType[] = [{ ...section1, width: 12 }];

			const result = onChangeSection({
				layoutId: 2,
				layouts: sections,
				newRange: [0, 12],
				range: [0, 12],
			});

			expect(result).toEqual(undefined);
		});

	});

	describe('If a sections array has 2 sections', () => {
		it("Should add 1 to both the width and start of a second layout", () => {
			const layouts: SectionType[] = [
				{ ...section1, width: 3 },
				{ ...section2, width: 9 },
			];

			const result = onChangeSection({
				layoutId: 1,
				layouts,
				newRange: [0, 4],
				range: [0, 3],
			});

			console.log({ result });

			expect(result).toStrictEqual([
				{ id: 1, start: 0, width: 4 },
				{ id: 2, start: 4, width: 8 }
			]);
		});

		it.only("Should add 1 to both the width and start of a second layout", () => {
			const layouts: SectionType[] = [
				{ ...section1, width: 3 },
				{ ...section2, width: 9 },
			];

			const result = onChangeSection({
				layoutId: 1,
				layouts,
				newRange: [0, 2],
				range: [0, 3],
			});

			expect(result).toStrictEqual([
				{ id: 1, start: 0, width: 2 }, // correct
				{ id: 2, start: 2, width: 10 }
			]);
		});
	});

});