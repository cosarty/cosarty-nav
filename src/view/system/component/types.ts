
import { ComponentType } from 'src/types'
import { $t } from 'src/locale'

export const componentTitleMap: Record<string, any> = {
  [ComponentType.Calendar]: $t('_calendar'),
  [ComponentType.OffWork]: $t('_offWork'),
  [ComponentType.Runtime]: $t('_runtime'),
  [ComponentType.Image]: $t('_image'),
  [ComponentType.Countdown]: $t('_countdown'),
  [ComponentType.HTML]: 'HTML',
  [ComponentType.Holiday]: $t('_holiday'),
}
