const { parse, createMessage, BATTMessage } = require('../../../dist/');

describe('message-factory', () => {
	test('should create message object using provided MessageParseResult.', () => {
		const rawMessage = '$|11|BATT|12|90111122223333444|13|WMXQFV|111|1|112|33|113|3664|$';
		const pr = parse(rawMessage);
		const m = createMessage(pr);

		expect(m).toEqual(new BATTMessage(pr));
	});
});