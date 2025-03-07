
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CommonService } from 'src/services/common'
import { SearchEngineComponent } from 'src/components/search-engine/search-engine.component'
import { CardComponent } from 'src/components/card/index.component'
import { FooterComponent } from 'src/components/footer/footer.component'
import { NzGridModule } from 'ng-zorro-antd/grid'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    SearchEngineComponent,
    CardComponent,
    FooterComponent,
  ],
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class WebpComponent {
  open: boolean = false

  constructor(public commonService: CommonService) {}

  ngOnInit() {}

  handleCilckNav(index: number) {
    this.commonService.handleCilckTopNav(index)
    this.handleToggleOpen()
  }

  handleToggleOpen() {
    this.open = !this.open
  }
}
