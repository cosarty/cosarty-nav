import React from './官网.json'
import Other from './其他.json'
import UI from './UI框架.json'
import Frame from './框架.json'
import Hooks from './hooks.json'
import Admin from './开源后台模版.json'
import Visual from './可视化框架.json'

export default {
  title: 'React',
  nav: [
    {
      title: '官网',
      nav: React,
    },
    {
      title: 'UI框架',
      nav: UI,
    },
    {
      title: '可视化框架',
      nav: Visual,
    },
    {
      title: 'Hooks',
      nav: Hooks,
    },
    {
      title: '框架',
      nav: Frame,
    },
    {
      title: '开源后台模版',
      nav: Admin,
    },
    {
      title: '其他',
      nav: Other,
    },
  ],
}
