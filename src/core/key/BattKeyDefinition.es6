//  Copyright (c) 2018-present, Deniz Kanmaz. All rights reserved.
//  This source code is licensed under the GNU GENERAL PUBLIC
//  LICENCE V3. Use of this source code is governed by a license
//  that can be found in the LICENSE file.

//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//  LICENSE file for more details.

//  You should have received a copy of the LICENSE file along with
//  this program. If not, see <http://www.gnu.org/licenses/>.


export class BattKeyDefinition
{
    static get CHARGE_STATUS(){
        return 111;
    }

    static get BATTERY_LEVEL(){
        return 112;
    }

    static get BATTERY_VOLTAGE(){
        return 113;
    }
}

// const createConst = (constName, value) => {
//     Object.defineProperty(BattKeyDefinition, constName, {
//         value: value,
//         writable: false,
//         enumerable: true,
//         configurable: false
//     })
// }

// createConst('CHARGE_STATUS', 111);
// createConst('BATTERY_LEVEL', 112);
// createConst('BATTERY_VOLTAGE', 113);