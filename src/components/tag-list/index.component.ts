import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IWebTag } from 'src/types'
import { tagMap } from 'src/store'
import { JumpService } from 'src/services/jump'

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'tag-list',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class TagListComponent {
  @Input() data: IWebTag[] = []

  tagMap = tagMap

  constructor(public jumpService: JumpService) {}
}
