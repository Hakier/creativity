const move = require('./move');
const position = require('./position');

describe('move', () => {
    describe('when called with character', () => {
        beforeAll(() => {
            position.X = 0;
            position.Y = 0;
        });

        it('should change position and increment crossing point if missed 0,0', () => {
            move('W');
            expect(position).toEqual({X: 0, Y: 1, CROSSED: 1});
            move('W');
            expect(position).toEqual({X: 0, Y: 2, CROSSED: 1});
            move('A');
            expect(position).toEqual({X: -1, Y: 2, CROSSED: 1});
            move('S');
            expect(position).toEqual({X: -1, Y: 1, CROSSED: 1});
            move('D');
            expect(position).toEqual({X: 0, Y: 1, CROSSED: 1});
            move('S');
            expect(position).toEqual({X: 0, Y: 0, CROSSED: 2});
            move('Q');
            expect(position).toEqual({X: -1, Y: 1, CROSSED: 2});
            move('Z');
            expect(position).toEqual({X: -2, Y: 0, CROSSED: 2});
            move('E');
            expect(position).toEqual({X: -1, Y: 1, CROSSED: 2});
            move('C');
            expect(position).toEqual({X: 0, Y: 0, CROSSED: 3});
        });
    });
});
