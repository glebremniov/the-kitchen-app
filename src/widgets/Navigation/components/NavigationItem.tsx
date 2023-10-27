import classNames from 'classnames'
import {
  NAVIGATION_ITEM_CLASSNAME, NAVIGATION_ITEM_TEXT_CLASSNAME,
  NAVIGATION_ITEM_ICON_CLASSNAME_ACTIVE, NAVIGATION_ITEM_TEXT_CLASSNAME_ACTIVE
} from '../constants/NavigationItemContants'
import { getIconByName } from '../helpers/getIconByName'
import { NavLink } from 'react-router-dom'

type NavigationItemProps = {
  title: string
  path: string,
  icon?: string
  shouldDisplayTitle?: boolean
}

export const NavigationItem = (props: NavigationItemProps) => {

  const {
    title,
    path,
    shouldDisplayTitle,
    icon = ''
  } = props


  const render = (isActive: boolean) => {

    const IconComponent = getIconByName(icon, isActive)

    return (
      <>
        <IconComponent
          className={classNames(NAVIGATION_ITEM_TEXT_CLASSNAME, {
            [NAVIGATION_ITEM_TEXT_CLASSNAME_ACTIVE]: isActive,
            'h-6 w-6': shouldDisplayTitle,
            'h-8 w-8': !shouldDisplayTitle
          })}
        />
        {
          shouldDisplayTitle &&
          <span
            className={classNames(NAVIGATION_ITEM_TEXT_CLASSNAME, {
              [NAVIGATION_ITEM_TEXT_CLASSNAME_ACTIVE]: isActive
            })}>{title}</span>
        }
      </>
    )
  }

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames(classNames(NAVIGATION_ITEM_CLASSNAME, {
          [NAVIGATION_ITEM_ICON_CLASSNAME_ACTIVE]: isActive
        }))
      }
    >
      {({ isActive }) => render(isActive)}
    </NavLink>
  )
}