
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { INavProps } from 'src/types'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'

@Component({
  standalone: true,
  imports: [CommonModule, NzDropDownModule],
  selector: 'app-web-more-menu',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class WebMoreMenuComponent {
  @Input() index = 0
  @Input() data: INavProps[] = []
  @Input() page = 0
  @Output() onClick = new EventEmitter()

  ngOnInit() {}

  handleCilck(index: number) {
    this.onClick?.emit?.(index)
  }
}
