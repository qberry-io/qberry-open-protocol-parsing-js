const {TEHUKeyDefinition} = require('../../../dist/core/key/');

describe('TEHUKeyDefinition', () => {
    test('should give the exact keys.', () => {
        expect(TEHUKeyDefinition.TEMPERATURE).toBe(311);
        expect(TEHUKeyDefinition.HUMIDITY).toBe(312);
    });
});