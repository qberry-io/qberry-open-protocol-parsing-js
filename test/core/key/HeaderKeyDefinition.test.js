const {HeaderKeyDefinition} = require('../../../dist/core/key/');

describe('HeaderKeyDefinition', () => {
    test('should give the exact keys.', () => {
        expect(HeaderKeyDefinition.MESSAGE_TYPE).toBe(11);
        expect(HeaderKeyDefinition.DEVICE_IDENTITY).toBe(12);
        expect(HeaderKeyDefinition.CONNECTION_ID).toBe(13);
    });
});