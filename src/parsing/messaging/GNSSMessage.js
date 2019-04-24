import { Message } from './Message';
import { MessageTypes } from './MessageTypes';
import { GNSSKeyDefinition } from '../../core/key';

export class GNSSMessage extends Message {
	constructor(parseResult) {
		super(parseResult.rawMessage,
			parseResult.keyvals,
			MessageTypes.GNSS
		)
	}

	get fixStatus() { return this.getBoolean(GNSSKeyDefinition.FIX_STATUS); }
	get latitude() { return this.getNumber(GNSSKeyDefinition.LATITUDE); }
	get longtitude() { return this.getNumber(GNSSKeyDefinition.LONGTITUDE); }
	get altitude() { return this.getNumber(GNSSKeyDefinition.MSL_ALTITUDE); }
	get speedOverGround() { return this.getNumber(GNSSKeyDefinition.SPEED_OVER_GROUND); }
	get courseOverGround() { return this.getNumber(GNSSKeyDefinition.COURSE_OVER_GROUND); }
	get fixMode() { return this.getBoolean(GNSSKeyDefinition.FIX_MODE); }
	get gnssSatellitesUsed() { return this.getNumber(GNSSKeyDefinition.GNSS_USED); }
	get glonassSatellitesUsed() { return this.getNumber(GNSSKeyDefinition.GLONASS_USED); }
}