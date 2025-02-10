
import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JumpService } from 'src/services/jump'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'

@Component({
  standalone: true,
  imports: [NzCarouselModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-swiper',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class SwiperComponent {
  @Input() images: any[] = []
  @Input() autoplay = true
  @Input() height = 300

  constructor(public jumpService: JumpService) {}
}
