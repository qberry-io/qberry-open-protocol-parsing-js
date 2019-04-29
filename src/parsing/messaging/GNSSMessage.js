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
import { GNSSKeyDefinition } from '../../core/key';
import { MessageParseResult } from '../MessageParseResult';

/**
 * Class represents a GNSS message.
 */
export class GNSSMessage extends Message {

	/**
	 * Initializes a new instance of the GNSSMessage.
	 * @param {MessageParseResult} parseResult The instance of the ParsingResult
	 * created by the message-parser utility.
	 */
	constructor(parseResult) {
		super(parseResult.rawMessage,
			parseResult.keyvals,
			MessageTypes.GNSS
		)
	}

	/**
	 * Gets Fix Status of the GNSS information.
	 * @returns {boolean} Fix Status of the GNSS information.
	 */
	get fixStatus() { return this.getBoolean(GNSSKeyDefinition.FIX_STATUS); }

	/**
	 * Gets Latitude of the location.
	 * @returns {number} Latitude of the location.
	 */
	get latitude() { return this.getNumber(GNSSKeyDefinition.LATITUDE); }

	/**
	 * Gets Longtitude of the location.
	 * @returns {number} Longtitude of the location.
	 */
	get longtitude() { return this.getNumber(GNSSKeyDefinition.LONGTITUDE); }

	/**
	 * Gets Altitude of the location.
	 * @returns {number} Altitude of the location.
	 */
	get altitude() { return this.getNumber(GNSSKeyDefinition.MSL_ALTITUDE); }

	/**
	 * Gets the Speed (in KM) of the point.
	 * @returns {number} Speed (in KM) of the point.
	 */
	get speedOverGround() { return this.getNumber(GNSSKeyDefinition.SPEED_OVER_GROUND); }

	/**
	 * Gets the actual direction of the point.
	 * @returns {number} Actual direction of the point.
	 */
	get courseOverGround() { return this.getNumber(GNSSKeyDefinition.COURSE_OVER_GROUND); }

	/**
	 * Gets the Fix Mode Status of the device.
	 * @returns {boolean} Fix Mode Status of the device.
	 */
	get fixMode() { return this.getBoolean(GNSSKeyDefinition.FIX_MODE); }

	/**
	 * Gets the number of GNSS Satellites used.
	 * @returns {number} Number of GNSS Satellites used. 
	 */
	get gnssSatellitesUsed() { return this.getNumber(GNSSKeyDefinition.GNSS_USED); }

	/**
	 * Gets the number of GLONASS Satellites used.
	 * @returns {number} Number of GLONASS Satellites used.
	 */
	get glonassSatellitesUsed() { return this.getNumber(GNSSKeyDefinition.GLONASS_USED); }
}