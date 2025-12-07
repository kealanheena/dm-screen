import add from '@/utils/add';

describe("#add", () => {
	
	it("Should return 3 when 1 and 2 are passed as arguments", () => {
		const result = add(1, 2);
		
		expect(result).toStrictEqual(3);
	});
});