const { parse } = require('../../dist/parsing');
const { MessageTypes } = require('../../dist/parsing/messaging');
const { HOLAMessage } = require('../../dist/parsing/messaging');

describe('message-parser', () => {
    test('should parse HOLA messages correctly.', () => {
        const rawMessage = "$|11|HOLA|12|90111122223333444|13|WMXQFV|14|B23a56|15|ONE|16|1.0.0|$";

        var pr = parse(rawMessage);
        // expect(pr.messageType).toBe(MessageTypes.HOLA);

        var m = new HOLAMessage(pr);
        expect(m.messageType).toBe(MessageTypes.HOLA);
        expect(m.deviceIdentity).toBe('90111122223333444');
        expect(m.connectionId).toBe('WMXQFV');
        expect(m.protocolVersion).toBe('1.0.0');
        expect(m.deviceModel).toBe('ONE');
        expect(m.secretKey).toBe('B23a56');
    })
});