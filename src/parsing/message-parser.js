import { InvalidMessageError } from './exception'
import { Symbol } from '../core';
import { HeaderKeyDefinition } from '../core/key';
import { MessageTypes } from './messaging/MessageTypes';
import { MessageParseResult } from './MessageParseResult';

const parse = (rawMessage) => {
	validate(rawMessage);

	const keyvals = [];

	const splitted = rawMessage.split(Symbol.SPLITTER);

	let val = null;
	let key = null;

	for (let i = 1; i < splitted.length; i++) {
		if (i % 2 == 0) {
			//val
			val = splitted[i];
			keyvals.push({ key, val });
		}
		else {
			//key
			key = parseInt(splitted[i]);
		}
	}

	// Find out the type of the message.
	const messageType = keyvals.filter(kv => kv.key === HeaderKeyDefinition.MESSAGE_TYPE)[0].val

	return new MessageParseResult(rawMessage, keyvals, messageType);
}

const validate = (rawMessage) => {
	if (isNullOrWhitespace(rawMessage)) {
		throw new InvalidMessageError('The provided message was null or empty.');
	}
	else if (!rawMessage.startsWith(Symbol.BEGIN)
		|| !rawMessage.endsWith(Symbol.END)) {
		throw new InvalidMessageError('A message must start ' +
			`with ${Symbol.BEGIN} character and end ` +
			`with ${Symbol.END} character.`);
	}

	else if (rawMessage.split('').filter(c => c === Symbol.SPLITTER).length % 2 == 0) {
		throw new InvalidMessageError('The provided message contains ' +
			'pipes more or less than expected.');
	}

	// https://stackoverflow.com/a/5559461/7939477
}

const isNullOrWhitespace = (input) => {

	if (typeof input === 'undefined'
		|| input == null) {
		return true
	}

	return input.replace(/\s/g, '').length < 1;
}

export { parse }