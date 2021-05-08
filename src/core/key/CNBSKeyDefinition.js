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
 * Class containing CNBS KEY constants.
 */
class CNBSKeyDefinition {

    /**
     * Gets CAN_DEVICE_NUMBER key.
     * @returns {number} CAN_DEVICE_NUMBER key.
     */
    static get CAN_DEVICE_NUMBER() {
        return 411;
    }

    /**
     * Gets ID_TYPE key.
     * @returns {number} ID_TYPE key.
     */
    static get ID_TYPE() {
        return 412;
    }

    /**
     * Gets RXID key.
     * @returns {number} RXID key.
     */
    static get RXID() {
        return 413;
    }

    /**
     * Gets DATA_LENGTH key.
     * @returns {number} DATA_LENGTH key.
     */
    static get DATA_LENGTH() {
        return 414;
    }

    /**
     * Gets DATA key.
     * @returns {number} DATA key.
     */
    static get DATA() {
        return 415;
    }
}

export { CNBSKeyDefinition };