export class MessageParseResult {
    constructor(rawMessage, keyvals, messageType) {
        this._rawMessage = rawMessage;
        this._keyvals = keyvals;
        this._messageType = messageType;
    }

    _rawMessage;
    _keyvals;
    _messageType;

    get rawMessage() { return this._rawMessage; }
    get keyvals() { return this._keyvals; }
    get messageType() { return this._messageType; }
}