import { Message } from './Message';
import { MessageTypes } from './MessageTypes';
import { BattKeyDefinition } from '../../core/key';

export class BATTMessage extends Message {
	constructor(parseResult) {
		super(parseResult.rawMessage,
			parseResult.keyvals,
			MessageTypes.BATT
		)
	}

	get chargeStatus() { return this.getNumber(BattKeyDefinition.CHARGE_STATUS); }
	get batteryLevel() { return this.getNumber(BattKeyDefinition.BATTERY_LEVEL); }
	get batteryVoltage() { return this.getNumber(BattKeyDefinition.BATTERY_VOLTAGE); }
}