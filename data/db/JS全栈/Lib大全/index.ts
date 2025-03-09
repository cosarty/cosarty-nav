import Extension from './扩展.json'
import Tools from './工具.json'
import Log from './日志库.json'
import Validator from './校验库.json'
import Editor from './富文本编辑器.json'
import VideoPlayer from './视频播放器.json'
import Plugin from './插件开发.json'
import Effect from './动效库.json'
import Time from './时间处理.json'
import Http from './http.json'
import Crypto from './加密.json'

export default {
  title: 'Lib大全',
  nav: [
    { title: '扩展', nav: Extension },
    { title: '时间处理', nav: Time },
    { title: '插件开发', nav: Plugin },
    { title: '日志库', nav: Log },
    { title: '校验库', nav: Validator },
    { title: '富文本编辑器', nav: Editor },
    { title: '视频播放器', nav: VideoPlayer },
    { title: '动效库', nav: Effect },
    { title: 'http', nav: Http },
    { title: '加密', nav: Crypto },
    { title: '工具', nav: Tools },
  ],
}
