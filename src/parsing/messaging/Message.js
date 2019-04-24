import { HeaderKeyDefinition } from '../../core/key/HeaderKeyDefinition'
export class Message {
	constructor(rawMessage, keyvals, messageType) {
		this._rawMessage = rawMessage;
		this._keyvals = keyvals;
		this._messageType = messageType;
	}

	get rawMessage() {
		return this._rawMessage;
	}

	get keyvals() {
		return this._keyvals;
	}

	get messageType() {
		return this._messageType;
	}

	get deviceIdentity() {
		return this.getString(HeaderKeyDefinition.DEVICE_IDENTITY);
	}

	get connectionId() {
		return this.getString(HeaderKeyDefinition.CONNECTION_ID);
	}

	getString(key) {
		return String(this.getObject(key).val);
	}

	getNumber(key) {
		return parseFloat(this.getObject(key).val);
	}

	getBoolean(key) {
		return parseFloat(this.getObject(key).val) === 1;
	}

	getObject(key) {
		const filtered = this._keyvals.filter(itemKeyval => {
			return itemKeyval.key == key;
		});

		return filtered.length > 0 ? filtered[0] : null;
	}


}