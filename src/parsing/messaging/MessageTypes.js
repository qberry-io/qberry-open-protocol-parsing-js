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
 * Class including Message Type key constants.
 */
export class MessageTypes {

    /**
     * Gets HOLA message type key.
     * The first message after the establishing TCP connection.
     * @returns {string} HOLA message type key.
     */
    static get HOLA() {
        return "HOLA";
    }

    /**
     * Gets GNSS message type key.
     * Message to inform the current status of location.
     * @returns {string} GNSS message type key.
     */
    static get GNSS() {
        return "GNSS";
    }

    /**
     * Gets BATT message type key.
     * Message to inform the current status of battery.
     * @returns {string} BATT message type key.
     */
    static get BATT() {
        return "BATT";
    }

    /**
     * Gets TEHU message type key.
     * Message to inform the current status of Temperature and Humidity.
     * @returns {string} TEHU message type key.
     */
    static get TEHU() {
        return "TEHU";
    }

    /**
     * Gets CNBS message type key.
     * CANBUS messages.
     * @returns {string} CNBS message type key.
     */
     static get CNBS() {
        return "CNBS";
    }

    /**
     * Gets CSQU message type key.
     * Cell Signal Quality (Level).
     * @returns {string} CSQU message type key.
     */
     static get CSQU() {
        return "CSQU";
    }
}