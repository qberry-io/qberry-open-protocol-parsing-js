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
import { TEHUKeyDefinition } from '../../core/key';
import { MessageParseResult } from '../MessageParseResult';

/**
 * Class represents a TEHU message.
 */
export class TEHUMessage extends Message {

	/**
	 * Initializes a new instance of the TEHUMessage.
	 * @param {MessageParseResult} parseResult The instance of the ParsingResult
	 * created by the message-parser utility.
	 */
	constructor(parseResult) {
		super(parseResult.rawMessage,
			parseResult.keyvals,
			MessageTypes.TEHU
		)
	}

	/**
	 * Gets the Temperature of the environment.
	 * @returns {number} Temperature of the environment.
	 */
	get temperature() { return this.getNumber(TEHUKeyDefinition.TEMPERATURE); }

	/**
	 * Gets the Humidity of the environment.
	 * @returns {number} Humidity of the environment.
	 */
	get humidity() { return this.getNumber(TEHUKeyDefinition.HUMIDITY); }
}