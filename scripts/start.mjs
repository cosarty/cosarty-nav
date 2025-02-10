import fs from 'fs'
import path from 'path'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import yaml from 'js-yaml'
import {
  getWebCount,
  setWeb,
  replaceJsdelivrCDN,
  formattedJson,
} from './util.mjs'
import { generateDefaultDb } from './default_db.mjs'
import { generateComponent } from './defaul_component.mjs'
import { generateTags } from './defaule_tags.mjs'
import {db} from '../data/db/db.mjs'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Shanghai')
const pkgPath = path.join('.', 'package.json')
const configPath = path.join('.', 'nav.config.yaml')
const pkgJson = JSON.parse(fs.readFileSync(pkgPath).toString())
const config = yaml.load(fs.readFileSync(configPath))
const configJson = {
  version: pkgJson.version,
  gitRepoUrl: config.gitRepoUrl,
  imageRepoUrl: config.imageRepoUrl,
  branch: config.branch,
  hashMode: config.hashMode,
  address: config.address,
  email: config.email,
  port: config.port,
  datetime: dayjs.tz().format('YYYY-MM-DD HH:mm'),
}
fs.writeFileSync(
  path.join('.', 'nav.config.json'),
  await formattedJson(configJson),
)

const dbPath = path.join('.', 'data', 'db.json')
const internalPath = path.join('.', 'data', 'internal.json')
const settingsPath = path.join('.', 'data', 'settings.json')
const tagPath = path.join('.', 'data', 'tag.json')
const searchPath = path.join('.', 'data', 'search.json')
const componentPath = path.join('.', 'data', 'component.json')

let internal = {}
// let db = []
let settings = {}
let tags = []
let search = []

try {
  internal = JSON.parse(fs.readFileSync(internalPath).toString())
  settings = JSON.parse(fs.readFileSync(settingsPath).toString())
  search = JSON.parse(fs.readFileSync(searchPath).toString())
} catch {}

// 构建数据
// db = generateDefaultDb(dbPath)
// 构建组件
await generateComponent(componentPath, settings)

// 构建搜索
{
  if (!search.length) {
    search = [
      {
        name: '站内',
        icon: '/lemon.png',
        placeholder: '站内搜索',
        blocked: false,
        isInner: true,
      },
    ]
    fs.writeFileSync(searchPath, await formattedJson(search), {
      encoding: 'utf-8',
    })
  }
}

// 构建标签
tags = await generateTags(tagPath, settings)

{
  const banner1 =
    'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/banner1.jpg'
  const banner2 =
    'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/banner2.jpg'
  const backgroundImg =
    'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/background.jpg'

  settings.favicon ??= '/lemon.png'
  settings.language ||= 'zh-CN'
  settings.loading ??= 'loading2'
  settings.runtime ??= 1739030400000 || dayjs.tz().valueOf()
  settings.allowCollect ??= true
  settings.email ||= configJson.email || ''
  settings.showGithub ??= false
  settings.showLanguage ??= false
  settings.showRate ??= false
  settings.openSearch ??= true
  settings.title ??= '柠檬导航 - 自用导航网站'
  settings.description ??= '柠檬导航是一个自用的导航网站'
  settings.keywords ??= '自用导航'
  settings.theme ??= 'Side'
  settings.actionUrl ??= ''
  settings.appTheme ??= 'App'
  settings.openSEO ??= !configJson.address
  settings.headerContent ??= ''
  settings.footerContent ??= `
<div class="dark-white">
  <div>共收录$\{total\}个网站</div>
  <div>Copyright ©$\{year} $\{hostname}, All Rights Reserved</div>  
</div>
`.trim()
  settings.showThemeToggle ??= false

  settings.lightDocTitle ||= ''
  settings.lightCardStyle ||= 'standard'
  settings.lightOverType ||= 'overflow'
  settings.lightFooterHTML ||= ''
  settings.simThemeImages ||= [
    {
      src: banner1,
      url: '',
    },
    // {
    //   src: banner2,
    //   url: '',
    // },
  ]
  settings.simThemeDesc ??=
    '这里收录多达 <b>${total}</b> 个优质网站， 助您工作、学习和生活'
  settings.simCardStyle ||= 'original'
  settings.simOverType ||= 'overflow'
  settings.simThemeHeight ??= 0
  settings.simThemeAutoplay ??= true
  settings.simDocTitle ||= ''
  settings.simTitle ||= ''
  settings.simFooterHTML ||= ''
  settings.superCardStyle ||= 'column'
  settings.superOverType ||= 'overflow'
  settings.superFooterHTML ||= ''

  settings.superDocTitle ||= ''
  settings.superTitle ||= ''
  const defImgs = [
    // {
    //   src: 'https://gcore.jsdelivr.net/gh/xjh22222228/nav-image@image/nav-1717494364392-ad.jpg',
    //   url: 'https://haokawx.lot-ml.com/Product/index/454266',
    // },
    // {
    //   src: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/img/10.png',
    //   url: '',
    // },
  ]
  settings.superImages ??= defImgs
  settings.lightImages ??= defImgs
  if (!Array.isArray(settings.superImages)) {
    settings.superImages = defImgs
  }
  if (!Array.isArray(settings.lightImages)) {
    settings.lightImages = defImgs
  }
  settings.sideTitle ||= ''
  settings.sideDocTitle ||= ''
  settings.sideCardStyle ||= 'standard'
  settings.sideFooterHTML ||= ''
  settings.sideThemeHeight ??= 0
  settings.sideThemeAutoplay ??= true
  settings.sideCollapsed ??= false
  settings.sideThemeImages ||= [
    // {
    //   src: banner2,
    //   url: '',
    // },
    {
      src: banner1,
      url: '',
    },
  ]
  settings.shortcutTitle ??= ''
  settings.shortcutDocTitle ||= ''
  settings.shortcutDockCount ??= 6
  settings.shortcutThemeShowWeather ??= true
  settings.shortcutThemeImages ??= [
    {
      src: backgroundImg,
      url: '',
    },
  ]
  settings.checkUrl ??= false
  settings.spiderIcon ??= 'NO'
  settings.spiderDescription ??= 'NO'
  settings.spiderTitle ??= 'NO'
  settings.spiderQty ??= 200
  settings.spiderTimeout ??= 6
  settings.spiderTimeout = Number(settings.spiderTimeout) || 6
  settings.loadingCode ??= ''

  settings.appCardStyle ??= 'retro'
  settings.appDocTitle ||= ''
  settings.gitHubCDN ||= 'gcore.jsdelivr.net'
  settings.components ||= []

  // 替换CDN
  search = search.map((item) => {
    item.icon = replaceJsdelivrCDN(item.icon, settings)
    return item
  })
  settings.favicon = replaceJsdelivrCDN(settings.favicon, settings)
  settings.simThemeImages = settings.simThemeImages.map((item) => {
    item.src = replaceJsdelivrCDN(item.src, settings)
    return item
  })
  settings.superImages = settings.superImages.map((item) => {
    item.src = replaceJsdelivrCDN(item.src, settings)
    return item
  })
  settings.lightImages = settings.lightImages.map((item) => {
    item.src = replaceJsdelivrCDN(item.src, settings)
    return item
  })
  settings.sideThemeImages = settings.sideThemeImages.map((item) => {
    item.src = replaceJsdelivrCDN(item.src, settings)
    return item
  })
  settings.shortcutThemeImages = settings.shortcutThemeImages.map((item) => {
    item.src = replaceJsdelivrCDN(item.src, settings)
    return item
  })
  fs.writeFileSync(settingsPath, await formattedJson(settings), {
    encoding: 'utf-8',
  })
}

const { userViewCount, loginViewCount } = getWebCount(db)
internal.userViewCount = userViewCount < 0 ? loginViewCount : userViewCount
internal.loginViewCount = loginViewCount
fs.writeFileSync(internalPath, await formattedJson(internal))
// fs.writeFileSync(dbPath, await formattedJson(setWeb(db, settings, tags)))
