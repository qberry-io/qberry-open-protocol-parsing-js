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

import { HeaderKeyDefinition } from '../../core/key/HeaderKeyDefinition'

/**
 * Represents an abstract Message (See derived classes).
 */
export class Message {

	/**
	 * @typedef {object} Keyval
	 * @property {number} key
	 * @property {number|string} value
	 */

	/**
	 * Initializes a new instance of the Message.
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
	 * Gets the original message that came from the device.
	 * @returns {string} Original message that came from the device.
	 */
	get rawMessage() {
		return this._rawMessage;
	}

	/**
	 * Gets the type of message.
	 * @returns {string} Type of message.
	 */
	get messageType() {
		return this._messageType;
	}

	/**
	 * Gets the identity of the device.
	 * @returns {string} Identity of the device.
	 */
	get deviceIdentity() {
		return this.getString(HeaderKeyDefinition.DEVICE_IDENTITY);
	}

	/**
	 * Gets the identity of the connection.
	 * @returns {string} Identity of the connection.
	 */
	get connectionId() {
		return this.getString(HeaderKeyDefinition.CONNECTION_ID);
	}

	/**
	 * Gets the KeyVal (Key / Value) collection of the message.
	 * @returns {Keyval[]} KeyVal (Key / Value) collection of the message.
	 */
	get keyvals() {
		return this._keyvals;
	}

	/**
	 * Gets the value stored with the specified key. 
	 * @param {number} key - The key of the expected value.
	 * @returns {object} The value stored with the specified key.
	 */
	getObject(key) {
		const filtered = this._keyvals.filter(itemKeyval => {
			return itemKeyval.key == key;
		});

		return filtered.length > 0 ? filtered[0] : null;
	}

	/**
	 * Gets the value stored with the specified key.
	 * @param {number} key - The key of the expected value.
	 * @returns {string} The value stored with the specified key.
	 */
	getString(key) {
		return String(this.getObject(key).val);
	}

	/**
	 * Gets the value stored with the specified key.
	 * @param {number} key - The key of the expected value.
	 * @returns {number} The value stored with the specified key.
	 */
	getNumber(key) {
		return parseFloat(this.getObject(key).val);
	}

	/**
	 * Gets the value stored with the specified key.
	 * @param {number} key - The key of the expected value.
	 * @returns {boolean} The value stored with the specified key.
	 */
	getBoolean(key) {
		return parseFloat(this.getObject(key).val) === 1;
	}
}