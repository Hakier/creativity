const check = require('./check');

describe('check', () => {
    describe('when called with empty string', () => {
        it('should return 1', () => {
            expect(check('')).toBe(1);
        });
    });
});
