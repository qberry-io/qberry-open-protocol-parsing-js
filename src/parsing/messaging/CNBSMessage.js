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
import { CNBSKeyDefinition } from '../../core/key';
import { MessageParseResult } from '../MessageParseResult';

/**
 * Class represents a CNBS message.
 */
export class CNBSMessage extends Message {

	/**
	 * Initializes a new instance of the CNBSMessage.
	 * @param {MessageParseResult} parseResult The instance of the ParsingResult
	 * created by the message-parser utility.
	 */
	constructor(parseResult) {
		super(parseResult.rawMessage,
			parseResult.keyvals,
			MessageTypes.CNBS
		)
	}

	/**
	 * Gets the Can Device Number of the environment.
	 * @returns {number} Can Device Number.
	 */
	get canDeviceNumber() { return this.getNumber(CNBSKeyDefinition.CAN_DEVICE_NUMBER); }

	/**
	 * Gets the Can Id Type.
	 * @returns {string} CAN Id Type.
	 */
	get idType() { return this.getString(CNBSKeyDefinition.ID_TYPE); }

	/**
	 * Gets the RXID.
	 * @returns {string} RXID.
	 */
	get rxid() { return this.getString(CNBSKeyDefinition.RXID); }

	/**
	* Gets the Data Length.
	* @returns {number} Data Length.
	*/
	get dataLength() { return this.getNumber(CNBSKeyDefinition.DATA_LENGTH); }

	/**
	 * Gets the data.
	 * @returns {string} data.
	 */
	get data() { return this.getString(CNBSKeyDefinition.DATA); }

}
