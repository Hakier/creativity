const move = require('./move');
const position = require('./position');

module.exports = (moves) => {
    if (moves.length === 0) {
        return 1;
    }
    Array.prototype.forEach.call(moves, (char) => move(char));

    return position.CROSSED;
};
