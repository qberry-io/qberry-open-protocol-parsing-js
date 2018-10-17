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


export class GNSSKeyDefinition
{
    static get FIX_STATUS(){
        return 211;
    }

    static get LATITUDE(){
        return 212;
    }

    static get LONGTITUDE(){
        return 213;
    }

    static get MSL_ALTITUDE(){
        return 214;
    }

    static get SPEED_OVER_GROUND(){
        return 215;
    }

    static get COURSE_OVER_GROUND(){
        return 216;
    }

    static get FIX_MODE(){
        return 217;
    }

    static get GNSS_USED(){
        return 218;
    }

    static get GLONASS_USED(){
        return 219;
    }
}