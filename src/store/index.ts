import {db as dbJson} from '../../data/db/db'
import searchJson from '../../data/search.json'
import settingsJson from '../../data/settings.json'
import tagJson from '../../data/tag.json'
import internalJson from '../../data/internal.json'
import componentJson from '../../data/component.json'
import {
  ISettings,
  ISearchEngineProps,
  ITagProp,
  internalProps,
  ITagPropValues,
  INavProps,
  IComponentProps,
} from 'src/types'
import { isSelfDevelop } from 'src/utils/util'

export let settings: ISettings = settingsJson as ISettings

let _tagMap: Record<string, any> = {}

export let searchEngineList: ISearchEngineProps[] = isSelfDevelop
  ? []
  : searchJson

export let tagList: Array<ITagPropValues> = isSelfDevelop ? [] : tagJson

export function getTagMap() {
  tagList.forEach((item) => {
    if (item.id) {
      _tagMap[item.id] = {
        ...item,
      }
    }
  })
  return _tagMap
}
getTagMap()

export let tagMap: ITagProp = _tagMap

export let internal: internalProps = internalJson

export let websiteList: INavProps[] = isSelfDevelop
  ? []
  : (dbJson as INavProps[])

export let components: IComponentProps[] = isSelfDevelop ? [] : componentJson
