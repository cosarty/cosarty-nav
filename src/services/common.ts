
import { Injectable } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { websiteList, settings } from 'src/store'
import {
  queryString,
  fuzzySearch,
  matchCurrentList,
  getOverIndex,
} from 'src/utils'
import { setWebsiteList, toggleCollapseAll } from 'src/utils/web'
import { INavProps, INavThreeProp } from 'src/types'
import { isLogin } from 'src/utils/user'
import { isSelfDevelop } from 'src/utils/util'
import event from 'src/utils/mitt'

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  isLogin = isLogin
  settings = settings
  websiteList: INavProps[] = websiteList
  currentList: INavThreeProp[] = []
  id = 0
  page = 0
  sliceMax = 0
  selectedIndex = 0 // 第三级菜单选中
  searchKeyword = ''
  overIndex = Number.MAX_SAFE_INTEGER
  title: string = settings.title.trim().split(/\s/)[0]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const init = () => {
      this.activatedRoute.queryParams.subscribe(() => {
        const { id, page, q } = queryString()
        this.page = page
        this.id = id
        this.searchKeyword = q
        this.handleCheckThree(0)
        this.sliceMax = 0

        if (q) {
          this.currentList = fuzzySearch(websiteList, q)
        } else {
          this.currentList = matchCurrentList()
        }
        setTimeout(() => {
          this.sliceMax = Number.MAX_SAFE_INTEGER
        }, 100)
      })
    }
    if (window.__FINISHED__) {
      init()
    } else {
      event.on('WEB_FINISH', () => {
        init()
      })
    }
  }

  handleCilckTopNav(index: number) {
    const id = websiteList[index].id || 0
    this.router.navigate([this.router.url.split('?')[0]], {
      queryParams: {
        page: index,
        id,
        _: Date.now(),
      },
    })
  }
  handleSidebarNav(index: number, pageIndex?: number) {
    const { page } = queryString()
    websiteList[pageIndex ?? page].id = index
    this.router.navigate([this.router.url.split('?')[0]], {
      queryParams: {
        page: pageIndex ?? page,
        id: index,
        _: Date.now(),
      },
    })
  }

  handleCheckThree(index: number) {
    this.selectedIndex = index
  }

  onCollapseAll = (e?: Event) => {
    e?.stopPropagation()
    toggleCollapseAll(websiteList)
  }

  trackByItem(a: any, item: any) {
    return item.title
  }

  trackByItemWeb(a: any, item: any) {
    return item.id
  }

  get collapsed() {
    try {
      return !!websiteList[this.page].nav[this.id].collapsed
    } catch (error) {
      return false
    }
  }

  onCollapse = (item: any, index: number) => {
    item.collapsed = !item.collapsed
    this.websiteList[this.page].nav[this.id].nav[index] = item
    if (!isSelfDevelop) {
      setWebsiteList(this.websiteList)
    }
  }

  getOverIndex(selector: string) {
    queueMicrotask(() => {
      const overIndex = getOverIndex(selector)
      if (this.overIndex === overIndex) {
        return
      }
      this.overIndex = overIndex
    })
  }
}
