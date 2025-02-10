
import { Component, Input } from '@angular/core'
import { getDateTime, getDayOfYear } from 'src/utils'
import { IComponentProps } from 'src/types'
import { $t } from 'src/locale'

@Component({
  standalone: true,
  selector: 'app-calendar',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CalendarComponent {
  @Input() data!: IComponentProps

  date = ''
  day = ''
  week = ''
  dayOfYear = ''

  constructor() {
    const date = getDateTime()
    this.date = $t('_calendarDate', { year: date.year, month: date.month })
    this.day = date.zeroDate
    this.week = date.dayText
    this.dayOfYear = $t('_dayOfYear', { day: getDayOfYear() })
  }
}
