import fs from 'fs'
import { replaceJsdelivrCDN, formattedJson } from './util.mjs'

// 构建时间组件
const getCalendar = (components) => {
  const idx = components.findIndex((item) => item.type === 1)
  const calendar = {
    type: 1,
    id: -1,
    topColor: '#ff5a5d',
    bgColor: '#1d1d1d',
  }
  if (idx >= 0) {
    components[idx] = {
      ...calendar,
      ...components[idx],
    }
  } else {
    components.push(calendar)
  }
}

// 构建组件
const offWork = (components) => {
  const idx = components.findIndex((item) => item.type === 2)
  const offWork = {
    type: 2,
    id: -2,
    workTitle: '距离下班还有',
    restTitle: '休息啦',
    startDate: new Date(2018, 3, 26, 9, 0, 0).getTime(),
    date: new Date(2018, 3, 26, 18, 0, 0).getTime(),
  }
  if (idx >= 0) {
    components[idx] = {
      ...offWork,
      ...components[idx],
    }
  } else {
    components.push(offWork)
  }
}

const getImage = (components, settings) => {
  const idx = components.findIndex((item) => item.type === 4)
  const image = {
    type: 4,
    id: -4,
    url: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/component1.jpg',
    go: '',
    text: '只有认可，才能强大',
  }
  if (idx >= 0) {
    components[idx] = {
      ...image,
      ...components[idx],
    }
    components[idx].url = replaceJsdelivrCDN(components[idx].url, settings)
  } else {
    components.push(image)
  }
}

const getCountdown = (components, settings) => {
  const idx = components.findIndex((item) => item.type === 5)
  const countdown = {
    type: 5,
    id: -5,
    topColor: 'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)',
    bgColor: 'rgb(235,129,124)',
    url: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/component2.jpg',
    title: '距离春节还有',
    dateColor: '#fff',
    dayColor: '#fff',
    date: '2026-02-17',
  }
  if (idx >= 0) {
    components[idx] = {
      ...countdown,
      ...components[idx],
    }
    components[idx].url = replaceJsdelivrCDN(components[idx].url, settings)
  } else {
    components.push(countdown)
  }
}

const getHtml = (components) => {
  const idx = components.findIndex((item) => item.type === 6)
  const html = {
    type: 6,
    id: -6,
    html: 'hello world',
  }
  if (idx >= 0) {
    components[idx] = {
      ...html,
      ...components[idx],
    }
  } else {
    components.push(html)
  }
}

const getRuntime = (components) => {
  const idx = components.findIndex((item) => item.type === 3)
  const runtime = {
    type: 3,
    id: -3,
    title: '已稳定运行',
  }
  if (idx >= 0) {
    components[idx] = {
      ...runtime,
      ...components[idx],
    }
  } else {
    components.push(runtime)
  }
}

const getHoliday = (components) => {
  const idx = components.findIndex((item) => item.type === 7)
  const holiday = {
    type: 7,
    id: -7,
    items: [],
  }
  if (idx >= 0) {
    components[idx] = {
      ...holiday,
      ...components[idx],
    }
  } else {
    components.push(holiday)
  }
}

// 构建组件
export const generateComponent = async (componentPath, settings) => {
  let components = []
  try {
    components = JSON.parse(fs.readFileSync(componentPath).toString())
  } catch {
  } finally {
    getCalendar(components)

    offWork(components)
    getImage(components, settings)
    getCountdown(components, settings)
    getRuntime(components)
    getHtml(components)
    getHoliday(components)
    fs.writeFileSync(componentPath, await formattedJson(components))
  }

  return components
}
