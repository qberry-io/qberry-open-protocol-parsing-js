import { Message } from './Message';
import { MessageTypes } from './MessageTypes';
import { TEHUKeyDefinition } from '../../core/key';

export class TEHUMessage extends Message {
	constructor(parseResult) {
		super(parseResult.rawMessage,
			parseResult.keyvals,
			MessageTypes.TEHU
		)
	}

	get temperature() { return this.getNumber(TEHUKeyDefinition.TEMPERATURE); }
	get humidity() { return this.getNumber(TEHUKeyDefinition.HUMIDITY); }
}