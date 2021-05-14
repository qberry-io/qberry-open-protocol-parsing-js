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
import { CSQUKeyDefinition } from '../../core/key';
import { MessageParseResult } from '../MessageParseResult';

/**
 * Class represents a CSQU message.
 */
export class CSQUMessage extends Message {

	/**
	 * Initializes a new instance of the CSQUMessage.
	 * @param {MessageParseResult} parseResult The instance of the ParsingResult
	 * created by the message-parser utility.
	 */
	constructor(parseResult) {
		super(parseResult.rawMessage,
			parseResult.keyvals,
			MessageTypes.CSQU
		)
	}

	/**
	 * Gets Received Signal Strength Indication value.
	 * @returns {number} RSSI value.
	 */
	get RSSI() { return this.getNumber(CSQUKeyDefinition.RSSI); }

	/**
	 * Gets Bit Error Rate value.
	 * @returns {number} BER value.
	 */
	get BER() { return this.getNumber(CSQUKeyDefinition.BER); }
}