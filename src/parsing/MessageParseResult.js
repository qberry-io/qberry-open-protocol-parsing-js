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


/**
 * Represents the result of a parse operation.
 */
export class MessageParseResult {

    /**
	 * @typedef {object} Keyval
	 * @property {number} key
	 * @property {number|string} value
	 */

    /**
     * Initializes a new instance of the MessageParserResult.
     * @param {string} rawMessage - Raw message from the device.
	 * @param {Keyval[]} keyvals - KeyVal collection created by message-parser utility.
	 * @param {string} messageType - Type of the message.
     */
    constructor(rawMessage, keyvals, messageType) {
        this._rawMessage = rawMessage;
        this._keyvals = keyvals;
        this._messageType = messageType;
    }

    /**
     * Gets the Keyval (Key / Value) collection.
     * @returns {Keyval[]} - Keyval (Key / Value) collection.
     */
    get keyvals() { return this._keyvals; }


    /**
     * Gets the type of the message.
     * @returns {string} - Type of the message.
     */
    get messageType() { return this._messageType; }

    /**
     * Gets the original message string.
     * @returns {string} Original message string.
     */
    get rawMessage() { return this._rawMessage; }
}