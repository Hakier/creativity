const position = require('./position');
const moves = require('./moves');

module.exports = (char) => {
    const move = moves[char];

    if (!move) {
        return;
    }

    const [X, Y] = move;

    position.X += X;
    position.Y += Y;

    if (position.X === 0 && position.Y === 0) {
        position.CROSSED++;
    }
};
