import { Message } from './Message';
import { MessageTypes } from './MessageTypes';
import { HolaKeyDefinition } from '../../core/key';

export class HOLAMessage extends Message {
    constructor(parseResult) {
        super(parseResult.rawMessage,
            parseResult.keyvals,
            MessageTypes.HOLA
        )
    }

    get secretKey() { return this.getString(HolaKeyDefinition.SECRET_KEY); }
    get deviceModel() { return this.getString(HolaKeyDefinition.DEVICE_MODEL); }
    get protocolVersion() { return this.getString(HolaKeyDefinition.PROTOCOL_VERSION); }
}