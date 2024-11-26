const dice_roll_analyse = require('./index')

describe('dice_roll_analyse', () => {
    it.each([
        { input: [6, 6, 6, 6, 6], output: 50 },
    ])('should return $output when given $input', ({ input, output }) => {
        expect(dice_roll_analyse(input)).toBe(output);
    });
});