const check = require('./check');
const move = require('./move');
const position = require('./position');

jest.mock('./move');

describe('check', () => {
    describe('when called with non empty string', () => {
        let result;

        beforeAll(() => {
            position.CROSSED = 66;
            result = check('WSDQZ');
        });

        it('should call move with each character', () => {
            expect(move).toHaveBeenCalledTimes(5);
            expect(move).toHaveBeenCalledWith('W');
            expect(move).toHaveBeenCalledWith('S');
            expect(move).toHaveBeenCalledWith('D');
            expect(move).toHaveBeenCalledWith('Q');
            expect(move).toHaveBeenCalledWith('Z');
        });
        it('should return result of CROSSED', () => {
            expect(result).toBe(66);
        });
    });
});
