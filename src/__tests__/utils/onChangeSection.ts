import onChangeSection from "@/utils/onChangeSection";
import { SectionType } from '@/types';

describe("#onChangeSection", () => {

	let section1: SectionType,
			section2: SectionType;
			// section3: SectionType,
			// section4: SectionType;

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

	describe.only('If a sections array has only 1 section', () => {
		it("Should not change if start + width is 12", () => {
			const section = { ...section1, width: 12 };
			// Start is 0 here see beforeAll()
			const sections: SectionType[] = [section];

			const result = onChangeSection({
				section,
				layouts: sections,
				newRange: [0, 12],
			});

			expect(result).toEqual(undefined);
		});

	});

	describe('If a sections array has 2 sections', () => {
		it("Should add 1 to width of section1 and start of section2", () => {
			const layouts: SectionType[] = [section1, { ...section2, width: 9 }];

			const result = onChangeSection({
				section: section1,
				layouts,
				newRange: [0, 4],
			});

			expect(result).toStrictEqual([
				{ id: 1, start: 0, width: 4 },
				{ id: 2, start: 4, width: 8 }
			]);
		});

		it("Should remove 1 from width of section1 and start of section2", () => {
			const layouts: SectionType[] = [
				section1,
				{ ...section2, width: 9 },
			];

			const result = onChangeSection({
				section: section1,
				layouts,
				newRange: [0, 2],
			});

			expect(result).toStrictEqual([
				{ id: 1, start: 0, width: 2 }, // correct
				{ id: 2, start: 2, width: 10 }
			]);
		});
	});

});