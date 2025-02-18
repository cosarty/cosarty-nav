import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IComponentProps } from 'src/types'
import event from 'src/utils/mitt'

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-offwork',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class OffWorkComponent {
  @Input() data!: IComponentProps

  countdownStr = ''
  isRest = false
  timer: any

  constructor() {
    document.addEventListener(
      'visibilitychange',
      this.visibilitychange.bind(this),
    )
  }

  ngOnInit() {
    this.init()
    event.on('COMPONENT_OK', () => {
      clearTimeout(this.timer)
      setTimeout(() => {
        this.init()
      }, 100)
    })
  }

  ngOnDestroy() {
    clearTimeout(this.timer)
    document.removeEventListener('visibilitychange', this.visibilitychange)
  }

  visibilitychange(e: any) {
    if (e.target.hidden) {
      clearTimeout(this.timer)
    } else {
      this.init()
    }
  }

  init() {
    if (this.data) {
      const now = new Date()
      const nowTime = now.getTime()
      // const startDate = new Date(this.data['startDate'])
      const startDate = new Date()
      // startDate.setFullYear(now.getFullYear())
      // startDate.setMonth(now.getMonth())
      // startDate.setDate(now.getDate())
      startDate.setHours(11, 0, 0, 0)
      const startTime = startDate.getTime()
      // const date = new Date(this.data['date'])
      const date = new Date()
      // date.setFullYear(now.getFullYear())
      // date.setMonth(now.getMonth())
      // date.setDate(now.getDate())
      date.setHours(22, 0, 0, 0)
      const dateTime = date.getTime()
      const diffTime = (dateTime - nowTime) / 1000
      const hours = diffTime / (60 * 60)
      const decimal = Math.floor((hours % 1) * 10) / 10
      const minutes = Math.floor((diffTime / 60) % 60)
      const seconds = Math.floor(diffTime % 60)
      const hoursDecimal = Math.floor(hours) + decimal

      if (nowTime >= startTime && nowTime <= dateTime) {
        if (hoursDecimal >= 1) {
          this.countdownStr = `${hoursDecimal}小时`
        } else if (minutes > 0) {
          this.countdownStr = `${minutes}分钟`
        } else if (seconds >= 0) {
          this.countdownStr = `${seconds}秒`
        }
      } else {
        this.isRest = true
        return clearTimeout(this.timer)
      }
      this.isRest = false
    }
    this.timer = setTimeout(() => this.init(), 1000)
  }
}
