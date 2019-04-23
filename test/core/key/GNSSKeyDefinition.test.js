const {GNSSKeyDefinition} = require('../../../dist/core/key/');

describe('GNSSKeyDefinition', () => {
    test('should give the exact keys.', () => {
        expect(GNSSKeyDefinition.FIX_STATUS).toBe(211);
        expect(GNSSKeyDefinition.LATITUDE).toBe(212);
        expect(GNSSKeyDefinition.LONGTITUDE).toBe(213);
        expect(GNSSKeyDefinition.MSL_ALTITUDE).toBe(214);
        expect(GNSSKeyDefinition.SPEED_OVER_GROUND).toBe(215);
        expect(GNSSKeyDefinition.COURSE_OVER_GROUND).toBe(216);
        expect(GNSSKeyDefinition.FIX_MODE).toBe(217);
        expect(GNSSKeyDefinition.GNSS_USED).toBe(218);
        expect(GNSSKeyDefinition.GLONASS_USED).toBe(219);
    })
});