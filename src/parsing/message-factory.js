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

import { MessageParseResult } from './MessageParseResult';

/**
 * Creates appropriate object form for the parsed message with the message-specific properties.
 * @param {MessageParseResult} messageParseResult - The instance of the ParsingResult
	 * created by the message-parser utility.
 */
const create = (messageParseResult) => {
	const mpr = messageParseResult;
	const mc = require('./messaging/' + mpr.messageType + 'Message.js')[`${mpr.messageType}Message`];
	return new mc(messageParseResult);
}

export { create };