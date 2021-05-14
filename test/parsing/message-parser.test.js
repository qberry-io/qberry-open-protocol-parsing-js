const { parse } = require('../../dist/parsing');
const { MessageTypes } = require('../../dist/parsing/messaging');
const { InvalidMessageError, UnsupportedMessageTypeError } = require('../../dist/parsing/exception/');
const { HOLAMessage,
	BATTMessage,
	GNSSMessage,
	TEHUMessage,
	CNBSMessage } = require('../../dist/parsing/messaging');
const { CSQUMessage } = require('../../src/parsing/messaging');

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

	test('should parse CNBS messages correctly.', () => {
		const rawMessage = '$|11|CNBS|12|90111122223333444|13|WMXQFV|411|1|412|extid|413|0x18FE8100|414|8|415|0x00;0x7E;0x00;0x00;0x00;0x00;0x00;0x00|$';

		const pr = parse(rawMessage);
		expect(pr.messageType).toBe(MessageTypes.CNBS);

		const m = new CNBSMessage(pr);
		expect(m.messageType).toBe(MessageTypes.CNBS);
		expect(m.deviceIdentity).toBe('90111122223333444');
		expect(m.connectionId).toBe('WMXQFV');
		expect(m.canDeviceNumber).toBe(1);
		expect(m.idType).toBe('extid');
		expect(m.rxid).toBe('0x18FE8100');
		expect(m.dataLength).toBe(8);
		expect(m.data).toBe('0x00;0x7E;0x00;0x00;0x00;0x00;0x00;0x00');
	});
	
	test('should parse CSQU messages correctly.', () => {
		const rawMessage = '$|11|CSQU|12|90111122223333444|13|WMXQFV|611|25|612|0|$';

		const pr = parse(rawMessage);
		expect(pr.messageType).toBe(MessageTypes.CSQU);

		const m = new CSQUMessage(pr);
		expect(m.messageType).toBe(MessageTypes.CSQU);
		expect(m.deviceIdentity).toBe('90111122223333444');
		expect(m.connectionId).toBe('WMXQFV');
		expect(m.RSSI).toBe(25);
		expect(m.BER).toBe(0);
	});

	test('should throw exception if the message is invalid', () => {

		// null
		let rawMessage = null;
		expect(() => parse(rawMessage)).toThrowError(new InvalidMessageError('The provided message was null or empty.'));

		// Empty string
		rawMessage = '';
		expect(() => parse(rawMessage)).toThrowError(new InvalidMessageError('The provided message was null or empty.'));

		// Doesn't start with "$"
		rawMessage = "|11|GNSS|12|90111122223333444|13|WMXQFV|211|1|212|41.042820|213|28.689460|214|108.600|215|0.43|216|344.6|217|1|218|5|219|0|$";
		expect(() => parse(rawMessage)).toThrowError(new InvalidMessageError('A message must start with $ character and end with $ character.'));

		// Doesn't end with "$"
		rawMessage = "$|11|GNSS|12|90111122223333444|13|WMXQFV|211|1|212|41.042820|213|28.689460|214|108.600|215|0.43|216|344.6|217|1|218|5|219|0|";
		expect(() => parse(rawMessage)).toThrowError(new InvalidMessageError('A message must start with $ character and end with $ character.'));

		// Doesn't start and end with "$"
		rawMessage = "|11|GNSS|12|90111122223333444|13|WMXQFV|211|1|212|41.042820|213|28.689460|214|108.600|215|0.43|216|344.6|217|1|218|5|219|0|";
		expect(() => parse(rawMessage)).toThrowError(new InvalidMessageError('A message must start with $ character and end with $ character.'));

		// Contains pipes more or less than expected.
		rawMessage = "$|11|GNSS|12|90111122223333444|13||WMXQFV|211|1|212|41.042820|213|28.689460|214|108.600|215|0.43|216|344.6|217|1|218|5|219|0|$";
		expect(() => parse(rawMessage)).toThrowError(new InvalidMessageError('The provided message contains pipes more or less than expected.'));
	});

	test('should throw exception if the message type is not supported.', () => {

		// An unknown type of message.
		const rawMessage = '$|11|AAAA|12|90111122223333444|13|WMXQFV|17|123456789|311|22.20|312|43.80|$';

		expect(() => parse(rawMessage)).toThrowError(new UnsupportedMessageTypeError('AAAA'));
	});
});