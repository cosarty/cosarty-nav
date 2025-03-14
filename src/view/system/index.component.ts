// @ts-nocheck

import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router'
import { $t } from 'src/locale'
import { isLogin, userLogout, getAuthCode } from 'src/utils/user'
import { VERSION } from 'src/constants'
import { isSelfDevelop, removeDark } from 'src/utils/util'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { LoginComponent } from 'src/components/login/login.component'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    LoginComponent,
    RouterOutlet,
    NzSpinModule,
  ],
  selector: 'app-system',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export default class SystemComponent {
  isSelfDevelop = isSelfDevelop
  $t = $t
  isLogin: boolean = isLogin
  showLoginModal: boolean = !isLogin
  currentMenu: string = ''
  date = document.getElementById('META-NAV')?.dataset?.['date'] || ''
  currentVersionSrc = `https://img.shields.io/badge/current-v${VERSION}-red.svg?longCache=true&style=flat-square`
  isAuthz = !!getAuthCode()
  pageLoading = false

  constructor(private router: Router) {
    // 解决暗黑模式部分样式不正确问题，后台没有暗黑
    removeDark()

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.pageLoading = true
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.pageLoading = false
      }
    })
  }

  ngOnInit() {
    const u = window.location.href.split('/')
    this.currentMenu = u.at(-1)
  }

  goBack() {
    this.router.navigate(['/'])
  }

  goRoute(to: string, disabled? = false) {
    if (disabled) {
      return
    }
    this.router.navigate([to])
  }

  logout() {
    userLogout()
    this.router.navigate(['/'])
    setTimeout(() => {
      location.reload()
    }, 26)
  }
}
