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
 * Class represents an Unsupported Message Type Error.
 */
export class UnsupportedMessageTypeError extends Error {

    /**
     * Initializes an instance of the UnsupportedMessageTypeError.
     * @param {string} message Message to inform.
     */
	constructor(messageType) {
		super(`The type of the provided message type (${messageType}) is not supported. Please check for updates.`);
	}
}