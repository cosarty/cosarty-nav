
import { Component, Input } from '@angular/core'
import { IComponentProps } from 'src/types'
import { JumpService } from 'src/services/jump'

@Component({
  standalone: true,
  selector: 'app-image',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ImageComponent {
  @Input() data!: IComponentProps

  constructor(public jumpService: JumpService) {}
}
