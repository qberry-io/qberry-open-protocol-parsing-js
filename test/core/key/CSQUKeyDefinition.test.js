const {CSQUKeyDefinition} = require('../../../dist/core/key/');

describe('CSQUKeyDefinition', () => {
    test('should give the exact keys.', () => {
        expect(CSQUKeyDefinition.RSSI).toBe(611);
        expect(CSQUKeyDefinition.BER).toBe(612);
    });
});