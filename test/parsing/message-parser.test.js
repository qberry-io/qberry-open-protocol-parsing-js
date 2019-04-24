const { parse } = require('../../dist/parsing');
const { MessageTypes } = require('../../dist/parsing/messaging');
const { HOLAMessage,
	BATTMessage,
	GNSSMessage,
	TEHUMessage } = require('../../dist/parsing/messaging');

describe('message-parser', () => {
	test('should parse HOLA messages correctly.', () => {
		const rawMessage = '$|11|HOLA|12|90111122223333444|13|WMXQFV|14|B23a56|15|ONE|16|1.0.0|$';

		const pr = parse(rawMessage);
		expect(pr.messageType).toBe(MessageTypes.HOLA);

		const m = new HOLAMessage(pr);
		expect(m.messageType).toBe(MessageTypes.HOLA);
		expect(m.deviceIdentity).toBe('90111122223333444');
		expect(m.connectionId).toBe('WMXQFV');
		expect(m.protocolVersion).toBe('1.0.0');
		expect(m.deviceModel).toBe('ONE');
		expect(m.secretKey).toBe('B23a56');
	});

	test('should parse BATT messages correctly.', () => {
		const rawMessage = '$|11|BATT|12|90111122223333444|13|WMXQFV|111|1|112|33|113|3664|$';

		const pr = parse(rawMessage);
		expect(pr.messageType).toBe(MessageTypes.BATT);

		const m = new BATTMessage(pr);
		expect(m.messageType).toBe(MessageTypes.BATT);
		expect(m.deviceIdentity).toBe('90111122223333444');
		expect(m.connectionId).toBe('WMXQFV');
		expect(m.chargeStatus).toBe(1);
		expect(m.batteryLevel).toBe(33);
		expect(m.batteryVoltage).toBe(3664);
	});

	test('should parse GNSS messages correctly.', () => {
		const rawMessage = '$|11|GNSS|12|90111122223333444|13|WMXQFV|211|1|212|41.042820|213|28.689460|214|108.600|215|0.43|216|344.6|217|1|218|11|219|0|$';

		const pr = parse(rawMessage);
		expect(pr.messageType).toBe(MessageTypes.GNSS);

		const m = new GNSSMessage(pr);
		expect(m.messageType).toBe(MessageTypes.GNSS);
		expect(m.deviceIdentity).toBe('90111122223333444');
		expect(m.connectionId).toBe('WMXQFV');
		expect(m.fixStatus).toBe(true);
		expect(m.latitude).toBe(41.042820);
		expect(m.longtitude).toBe(28.689460);
		expect(m.altitude).toBe(108.600);
		expect(m.speedOverGround).toBe(0.43);
		expect(m.courseOverGround).toBe(344.6);
		expect(m.fixMode).toBe(true);
		expect(m.gnssSatellitesUsed).toBe(11);
		expect(m.glonassSatellitesUsed).toBe(0);
	});

	test('should parse TEHU messages correctly.', () => {
		const rawMessage = '$|11|TEHU|12|90111122223333444|13|WMXQFV|17|123456789|311|22.20|312|43.80|$';

		const pr = parse(rawMessage);
		expect(pr.messageType).toBe(MessageTypes.TEHU);

		const m = new TEHUMessage(pr);
		expect(m.messageType).toBe(MessageTypes.TEHU);
		expect(m.deviceIdentity).toBe('90111122223333444');
		expect(m.connectionId).toBe('WMXQFV');
		expect(m.temperature).toBe(22.20);
		expect(m.humidity).toBe(43.80);
	});
});