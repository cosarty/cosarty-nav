
import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { settings, components } from 'src/store'
import { ComponentType, IComponentProps } from 'src/types'
import { CalendarComponent } from 'src/components/calendar/index.component'
import { RuntimeComponent } from 'src/components/runtime/index.component'
import { OffWorkComponent } from 'src/components/off-work/index.component'
import { ImageComponent } from 'src/components/image/index.component'
import { CountdownComponent } from 'src/components/countdown/index.component'
import { HTMLComponent } from 'src/components/html/index.component'
import { HolidayComponent } from 'src/components/holiday/index.component'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent,
    RuntimeComponent,
    OffWorkComponent,
    ImageComponent,
    CountdownComponent,
    HTMLComponent,
    HolidayComponent,
  ],
  selector: 'component-group',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ComponentGroupComponent {
  @Input() direction: string = ''

  ComponentType = ComponentType
  components: IComponentProps[] = []

  constructor() {
    const c: IComponentProps[] = []
    // 按照系统设置顺序排序显示
    components.forEach((item) => {
      const has = settings.components.find(
        (c) => c.type === item.type && c.id === item.id
      )
      if (has) {
        c.push({
          ...item,
          ...has,
        })
      }
    })
    this.components = c
  }

  trackByItem(i: number, item: any) {
    return item.id
  }
}
