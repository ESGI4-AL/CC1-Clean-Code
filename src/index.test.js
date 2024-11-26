const dice_roll_analyse = require('./index')

describe('dice_roll_analyse', () => {
    it.each([
        { input: [3, 3, 3, 4, 5], output: 28 },
        { input: [2, 2, 2, 2, 5], output: 35 },
        { input: [6, 6, 6, 6, 6], output: 50 },
    ])('should return $output when given $input', ({ input, output }) => {
        expect(dice_roll_analyse(input)).toBe(output);
    });
});