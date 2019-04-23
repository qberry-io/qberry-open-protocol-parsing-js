const {BattKeyDefinition} = require('../../../dist/core/key/');

describe('BattKeyDefinition', () => {
    test('should give the exact keys.', () => {
        expect(BattKeyDefinition.CHARGE_STATUS).toBe(111);
        expect(BattKeyDefinition.BATTERY_LEVEL).toBe(112);
        expect(BattKeyDefinition.BATTERY_VOLTAGE).toBe(113);
    })
});