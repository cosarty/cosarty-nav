
import { Component, Input } from '@angular/core'
import { IComponentProps } from 'src/types'
import { SafeHtmlPipe } from 'src/pipe/safeHtml.pipe'

@Component({
  standalone: true,
  imports: [SafeHtmlPipe],
  selector: 'app-html',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class HTMLComponent {
  @Input() data!: IComponentProps

  constructor() {}
}
