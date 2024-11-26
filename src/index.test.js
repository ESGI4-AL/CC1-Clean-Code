const dice_roll_analyse = require('./index')

describe('dice_roll_analyse', () => {
    it.each([
        { input: [1, 1, 1, 2, 2], output: 30 },
        { input: [3, 3, 3, 4, 5], output: 28 },
        { input: [2, 2, 2, 2, 5], output: 35 },
        { input: [1, 2, 3, 4, 5], output: 40 },
        { input: [6, 6, 6, 6, 6], output: 50 },
        { input: [1, 2, 3, 4, 6], output: 16 }
    ])('should return $output when given $input', ({ input, output }) => {
        expect(dice_roll_analyse(input)).toBe(output);
    });
});