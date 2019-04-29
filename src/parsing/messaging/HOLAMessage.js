//  Copyright (c) 2019-present, Deniz Kanmaz. All rights reserved.
//  This source code is licensed under the GNU GENERAL PUBLIC
//  LICENCE V3. Use of this source code is governed by a license
//  that can be found in the LICENSE file.

//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//  LICENSE file for more details.

//  You should have received a copy of the LICENSE file along with
//  this program. If not, see <http://www.gnu.org/licenses/>.

import { Message } from './Message';
import { MessageTypes } from './MessageTypes';
import { HolaKeyDefinition } from '../../core/key';
import { MessageParseResult } from '../MessageParseResult';

/**
 * Class represents a HOLA message.
 */
export class HOLAMessage extends Message {

    /**
	 * Initializes a new instance of the HOLAMessage.
	 * @param {MessageParseResult} parseResult The instance of the ParsingResult
	 * created by the message-parser utility.
	 */
    constructor(parseResult) {
        super(parseResult.rawMessage,
            parseResult.keyvals,
            MessageTypes.HOLA
        )
    }

    /**
     * Gets the Secret Key of the device.
     * @returns {string} Secret Key of the device.
     */
    get secretKey() { return this.getString(HolaKeyDefinition.SECRET_KEY); }

    /**
     * Gets the Model of the device.
     * @returns {string} Model of the device.
     */
    get deviceModel() { return this.getString(HolaKeyDefinition.DEVICE_MODEL); }

    /**
     * Gets the version of the protocol.
     * @returns {string} Version of the protocol.
     */
    get protocolVersion() { return this.getString(HolaKeyDefinition.PROTOCOL_VERSION); }
}