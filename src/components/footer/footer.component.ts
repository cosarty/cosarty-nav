
import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { settings } from 'src/store'
import { compilerTemplate } from 'src/utils/util'
import { SafeHtmlPipe } from 'src/pipe/safeHtml.pipe'
import event from 'src/utils/mitt'

@Component({
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() className: string = ''
  @Input() content: string = ''

  footerContent: string = ''

  constructor() {}

  ngOnInit() {
    this.footerContent = compilerTemplate(
      this.content || settings.footerContent
    )
  }

  ngOnDestroy() {
    const applyWebEls = document.querySelectorAll('#app-footer .applyweb')
    applyWebEls.forEach((el) => {
      el.removeEventListener('click', this.handleApplyWeb)
    })
  }

  handleApplyWeb() {
    event.emit('CREATE_WEB')
  }

  ngAfterViewInit() {
    const applyWebEls = document.querySelectorAll('#app-footer .applyweb')
    applyWebEls.forEach((el) => {
      el.addEventListener('click', this.handleApplyWeb)
    })
  }
}
