/**
 * @copyright Copyright (c) 2020 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import { translate as t } from '@nextcloud/l10n'
import {
	getFirstDayOfWeekFromMomentLocale,
} from '../../utils/moment.js'

/**
 * Returns localization settings for the FullCalender package.
 *
 * @see https://fullcalendar.io/docs
 * @return {object}
 */
const getFullCalendarLocale = () => {
	return {
		firstDay: getFirstDayOfWeekFromMomentLocale(),
		// TRANSLATORS W is an abbreviation for Week
		weekText: t('calendar', 'W'),
		allDayText: t('calendar', 'All day'),
		moreLinkText: (n) => t('calendar', '%n more', {}, n),
		noEventsText: t('calendar', 'No events to display'),
	}
}

export {
	getFullCalendarLocale,
}
