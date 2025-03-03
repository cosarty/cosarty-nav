import Other from './其他.json'
import Speech from './语音相关.json'
import LLM from './大语言模型.json'
import ModelCommunity from './模型社区.json'
import Avatar from './数字人.json'
export default {
  title: '开源模型',
  nav: [
    {
      title: '模型社区',
      nav: ModelCommunity,
    },
    {
      title: '语音相关',
      nav: Speech,
    },
    {
      title: '大语言模型',
      nav: LLM,
    },
    {
      title: '数字人',
      nav: Avatar,
    },
    {
      title: '其他',
      nav: Other,
    },
  ],
}
