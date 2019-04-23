const {HolaKeyDefinition} = require('../../../dist/core/key/');

describe('HolaKeyDefinition', () => {
    test('should give the exact keys.', () => {
        expect(HolaKeyDefinition.SECRET_KEY).toBe(14);
        expect(HolaKeyDefinition.DEVICE_MODEL).toBe(15);
        expect(HolaKeyDefinition.PROTOCOL_VERSION).toBe(16);
    });
});