import Skill from './skill.json'
import AIProgramming from './AI编程.json'
import Material from './资料.json'
import MCP from './MCP.json'
import Sandbox from './沙箱.json'
export default {
  title: 'AI编程',
  nav: [
    {
      title: 'AI编程',
      nav: AIProgramming,
    },
    {
      title: 'Skills',
      nav: Skill,
    },
    {
      title: 'MCP',
      nav: MCP,
    },
    {
      title: '沙箱',
      nav: Sandbox,
    },
    {
      title: '资料',
      nav: Material,
    },
  ]
}
