
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

    const diceFrequencies  = Object.values(values).sort((a, b) => b - a);
    const grandSuiteDiceValues = Object.keys(values).map(Number).sort((a, b) => a - b);

    if (diceFrequencies[0] === 3 && diceFrequencies[1] === 2)
        return 30;
    if (diceFrequencies [0] === 5)
        return 50;
    if (diceFrequencies [0] === 4)
        return 35;
    if (diceFrequencies [0] === 3)
        return 28;
    if (grandSuiteDiceValues.length === 5 && grandSuiteDiceValues[4] - grandSuiteDiceValues[0] === 4)
        return 40;

    return dice_roll.reduce((sum, value) => sum + value, 0);;
}

module.exports = dice_roll_analyse;