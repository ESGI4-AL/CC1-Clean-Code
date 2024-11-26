
function dice_roll_analyse(dice_roll) {

    const values = {};

    for (let i = 0; i < dice_roll.length; i++) {
        const dice_value = dice_roll[i];
        if (values[dice_value]) {
            values[dice_value]++;
        } else {
            values[dice_value] = 1;
        }
    }

    const counts = Object.values(values).sort((a, b) => b - a);

    if (counts[0] === 5) return 50;
    if (counts[0] === 4) return 35;
    if (counts[0] === 3) return 28;

    return dice_roll.reduce((sum, value) => sum + value, 0);;
}

module.exports = dice_roll_analyse;