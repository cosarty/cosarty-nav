

import { Component, ChangeDetectionStrategy } from '@angular/core'
import { $t } from 'src/locale'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzEmptyModule } from 'ng-zorro-antd/empty'

@Component({
  standalone: true,
  imports: [NzButtonModule, NzEmptyModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent {
  $t = $t

  goBack = () => {
    history.go(-1)
  }
}
