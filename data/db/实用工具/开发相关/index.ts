import DevelopmentArtifact from './开发神器.json'
import InterfaceDevelopmentDocumentManagement from './接口|开发文档管理.json'
import IntranetPenetrationProxy from './内网穿透|代理.json'

export default {
  title: '开发相关',
  icon: '',
  nav: [
    {
      title: '开发神器',
      nav: DevelopmentArtifact,
    },
    {
      title: '接口/开发文档管理',
      nav: InterfaceDevelopmentDocumentManagement,
    },
    {
      title: '内网穿透/代理',
      nav: IntranetPenetrationProxy,
    },
  ],
}
