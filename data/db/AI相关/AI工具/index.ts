import AIWriting from './AI写作.json'
import ThirdPartyAPI from './第三方接口.json'
import AIInnovationProduct from './AI创新产品.json'
import AIPlatform from './AI平台.json'
import AIAgent from './智能体.json'
import Workflow from './工作流.json'
import OpenClaw from './OpenClaw.json'
import TranslatorStation from './中转站.json'
export default {
  title: 'AI工具',
  nav: [
    {
      title: 'AI平台',
      nav: AIPlatform,
    },
    {
      title: '中转站',
      nav: TranslatorStation,
    },
    {
      title: '智能体',
      nav: AIAgent,
    },
    {
      title: '工作流',
      nav: Workflow,
    },
    {
      title: 'AI写作',
      nav: AIWriting,
    },
    {
      title: '第三方接口',
      nav: ThirdPartyAPI,
    },
    {
      title: 'AI创新产品',
      nav: AIInnovationProduct,
    },
    {
      title: 'OpenClaw',
      nav: OpenClaw,
    },
  ],
}
