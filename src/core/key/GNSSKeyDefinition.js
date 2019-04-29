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
 * Class containing GNSS KEY constants.
 */
class GNSSKeyDefinition {
    /**
     * Gets Fix Status key.
     * @returns {number} Fix Status key.
     */
    static get FIX_STATUS() {
        return 211;
    }

    /**
     * Gets Latitude key.
     * @returns {number} Latitude key.
     */
    static get LATITUDE() {
        return 212;
    }

    /**
     * Gets Longtitude key.
     * @returns {number} Longtitude key.
     */
    static get LONGTITUDE() {
        return 213;
    }

    /**
     * Gets MSL Altitude key.
     * @returns {number} MSL Altitude key.
     */
    static get MSL_ALTITUDE() {
        return 214;
    }

    /**
     * Gets Speed Over Ground key.
     * @returns {number} Speed Over Ground key.
     */
    static get SPEED_OVER_GROUND() {
        return 215;
    }

    /**
     * Gets Course Over Ground key.
     * @returns {number} Course Over Ground key.
     */
    static get COURSE_OVER_GROUND() {
        return 216;
    }

    /**
     * Gets Fix Mode key.
     * @returns {number} Fix Mode key.
     */
    static get FIX_MODE() {
        return 217;
    }

    /**
     * Gets GNSS Used key.
     * @returns {number} GNSS Used key.
     */
    static get GNSS_USED() {
        return 218;
    }

    /**
     * Gets GLONASS Used key.
     * @returns {number} GLONASS Used key.
     */
    static get GLONASS_USED() {
        return 219;
    }
}

export { GNSSKeyDefinition };