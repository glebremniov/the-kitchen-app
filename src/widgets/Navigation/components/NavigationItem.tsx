import { Icon } from '../../../shared/Icon'
import { NAVIGATION_ITEM_CLASSNAME, NAVIGATION_ITEM_TEXT_CLASSNAME } from '../constants/NavigationItemContants'

type NavigationItemProps = {
  title: string
  icon?: string
}

export const NavigationItem = (props: NavigationItemProps) => {

  const { title, icon = '' } = props

  return (
    <button
      type="button"
      className={NAVIGATION_ITEM_CLASSNAME}
    >
      <Icon name={icon} />
      <span className={NAVIGATION_ITEM_TEXT_CLASSNAME}>{title}</span>
    </button>
  )
}