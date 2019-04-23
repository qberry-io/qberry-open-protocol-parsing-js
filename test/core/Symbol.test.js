const {Symbol} = require('../../dist/core/');

describe('Symbol', () => {
    test('should give the exact symbols.', () => {
        expect(Symbol.SPLITTER).toBe('|');
        expect(Symbol.BEGIN).toBe('$');
        expect(Symbol.END).toBe('$');
    });
});