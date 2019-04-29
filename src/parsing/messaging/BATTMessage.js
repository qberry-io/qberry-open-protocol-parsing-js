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
import { BattKeyDefinition } from '../../core/key';
import { MessageParseResult } from '../MessageParseResult';

/**
 * Class represents a BATT message.
 */
export class BATTMessage extends Message {

	/**
	 * Initializes a new instance of the BATTMessage.
	 * @param {MessageParseResult} parseResult The instance of the ParsingResult
	 * created by the message-parser utility.
	 */
	constructor(parseResult) {
		super(parseResult.rawMessage,
			parseResult.keyvals,
			MessageTypes.BATT
		)
	}

	/**
	 * Gets Charge Status of the device.
	 * @returns {number} Charge Status of the device.
	 */
	get chargeStatus() { return this.getNumber(BattKeyDefinition.CHARGE_STATUS); }

	/**
	 * Gets Battery Level of the device.
	 * @returns {number} Battery Level of the device.
	 */
	get batteryLevel() { return this.getNumber(BattKeyDefinition.BATTERY_LEVEL); }

	/**
	 * Gets Battery Voltage of the device.
	 * @returns {number} Battery Voltage of the device.
	 */
	get batteryVoltage() { return this.getNumber(BattKeyDefinition.BATTERY_VOLTAGE); }
}