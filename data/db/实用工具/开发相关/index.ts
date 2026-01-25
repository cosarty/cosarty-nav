import DevelopmentArtifact from './开发神器.json'
import InterfaceDevelopmentDocumentManagement from './接口|开发文档管理.json'
import IntranetPenetrationProxy from './内网穿透|代理.json'
import MCP from './MCP.json'
import GPULease from './GPU租借.json'
import DeploymentRelated from './部署相关.json'

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
    {
      title: 'GPU租借',
      nav: GPULease,
    },
    {
      title: 'MCP',
      nav: MCP,
    },
    {
      title: '部署相关',
      nav: DeploymentRelated,
    },
  ],
}
