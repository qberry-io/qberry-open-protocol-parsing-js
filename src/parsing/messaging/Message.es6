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
        return getObject(HeaderKeyDefinition.DEVICE_IDENTITY);
    }

    get getObject(key) {
        const filtered = this.keyvals.filter((itemKeyval) => {
            return itemKeyval.key == key;
        });

        return filtered.length > 0 ? filtered[0] : null;
    }


}