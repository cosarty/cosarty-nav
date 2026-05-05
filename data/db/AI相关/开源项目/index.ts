import Speech from './语音相关.json'
import LLM from './大语言模型相关.json'
import ModelCommunity from './模型社区.json'
import Avatar from './数字人.json'
import VideoRelated from './视频相关.json'
import Agent from './智能体.json'
import Automation from './自动化测试.json'
import RAG from './RAG.json'
import ImageRelated from './图片相关.json'
import VectorDatabase from './向量数据库.json'
import Sandbox from './沙箱.json'

export default {
  title: '开源项目',
  nav: [
    {
      title: '智能体',
      nav: Agent,
    },
    {
      title: '自动化测试',
      nav: Automation,
    },
    {
      title: 'RAG',
      nav: RAG,
    },
    {
      title: '模型社区',
      nav: ModelCommunity,
    },
    {
      title: '语音相关',
      nav: Speech,
    },
    {
      title: '视频相关',
      nav: VideoRelated,
    },
    {
      title: '图片相关',
      nav: ImageRelated,
    },
    {
      title: '大语言模型相关',
      nav: LLM,
    },
    {
      title: '向量数据库',
      nav: VectorDatabase,
    },
    {
      title: '数字人',
      nav: Avatar,
    },
    {
      title: '沙箱',
      nav: Sandbox,
    },
  ],
}
