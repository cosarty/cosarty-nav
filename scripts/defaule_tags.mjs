import {
  TAG_ID1,
  TAG_ID2,
  TAG_ID3,
  TAG_ID_NAME1,
  TAG_ID_NAME2,
  TAG_ID_NAME3,
  formattedJson,
} from './util.mjs'
import fs from 'fs'

export const generateTags = async (tagPath, settings) => {
  let tags = JSON.parse(fs.readFileSync(tagPath).toString())
  const isEn = settings.language === 'en'
  const desc = isEn ? 'The system is built-in' : '系统内置不可删除'
  if (!Array.isArray(tags)) {
    tags = []
  }
  const a = tags.some((item) => item.id === TAG_ID1)
  if (!a) {
    tags.push({
      id: TAG_ID1,
      name: isEn ? 'Chinese' : TAG_ID_NAME1,
      color: '#2db7f5',
      createdAt: '',
      desc,
      isInner: true,
    })
  }
  const b = tags.some((item) => item.id === TAG_ID2)
  if (!b) {
    tags.push({
      id: TAG_ID2,
      name: isEn ? 'English' : TAG_ID_NAME2,
      color: '#f50',
      createdAt: '',
      desc,
      isInner: true,
    })
  }
  const c = tags.some((item) => item.id === TAG_ID3)
  if (!c) {
    tags.push({
      id: TAG_ID3,
      name: TAG_ID_NAME3,
      color: '#108ee9',
      createdAt: '',
      desc,
      isInner: true,
    })
  }
  tags = tags.filter((item) => item.name && item.id)
  fs.writeFileSync(tagPath, await formattedJson(tags), {
    encoding: 'utf-8',
  })

  return tags
}
