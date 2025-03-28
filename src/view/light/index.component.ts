
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { randomBgImg } from 'src/utils'
import { CommonService } from 'src/services/common'
import { JumpService } from 'src/services/jump'
import { ComponentGroupComponent } from 'src/components/component-group/index.component'
import { WebMoreMenuComponent } from 'src/components/web-more-menu/index.component'
import { SearchEngineComponent } from 'src/components/search-engine/search-engine.component'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CardComponent } from 'src/components/card/index.component'
import { NoDataComponent } from 'src/components/no-data/no-data.component'
import { FooterComponent } from 'src/components/footer/footer.component'
import { FixbarComponent } from 'src/components/fixbar/index.component'
import { ToolbarTitleWebComponent } from 'src/components/toolbar-title/index.component'
import { NzGridModule } from 'ng-zorro-antd/grid'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ToolbarTitleWebComponent,
    ComponentGroupComponent,
    WebMoreMenuComponent,
    SearchEngineComponent,
    NzSpinModule,
    NzToolTipModule,
    CardComponent,
    NoDataComponent,
    FooterComponent,
    FixbarComponent,
    NzGridModule,
  ],
  selector: 'app-light',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export default class LightComponent {
  constructor(
    public commonService: CommonService,
    public jumpService: JumpService
  ) {}

  ngOnInit() {
    randomBgImg()
  }

  ngOnDestroy() {
    this.commonService.overIndex = Number.MAX_SAFE_INTEGER
  }

  ngAfterViewInit() {
    if (this.commonService.settings.lightOverType === 'ellipsis') {
      this.commonService.getOverIndex('.top-nav .over-item')
    }
  }
}
