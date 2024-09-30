import { add } from '../src/add';

describe('add function', () => {
    it('should return the sum of two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('should return the sum of negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    it('should return 0 when both arguments are 0', () => {
        expect(add(0, 0)).toBe(0);
    });
});
