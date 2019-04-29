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
 * Class containing Symbols.
 */
class Symbol {

    /**
     * Gets Splitter symbol.
     * @returns {string} Splitter symbol.
     */
    static get SPLITTER() {
        return '|';
    }

    /**
     * Gets Begin symbol.
     * @returns {string} Begin symbol.
     */
    static get BEGIN() {
        return '$';
    }

    /**
     * Gets End symbol.
     * @returns {string} End symbol.
     */
    static get END() {
        return '$';
    }
}

export { Symbol };