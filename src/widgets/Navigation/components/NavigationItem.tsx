import classNames from 'classnames'
import {
  NAVIGATION_ITEM_CLASSNAME, NAVIGATION_ITEM_COLOR_CLASSNAME, NAVIGATION_ITEM_COLOR_CLASSNAME_ACTIVE
} from '../constants'
import { getIconByName } from '../helpers'
import { NavLink } from 'react-router-dom'
import { useCallback } from 'react'

type NavigationItemProps = {
  title: string
  path: string,
  icon?: string
  shouldDisplayTitle?: boolean
}

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};

export const NavigationItem = (props: NavigationItemProps) => {

  const {
    title,
    path,
    shouldDisplayTitle,
    icon = ''
  } = props


  const render = useCallback(({ isActive }: NavLinkRenderProps) => {
    const IconComponent = getIconByName(icon, isActive)

    return (
      <>
        <IconComponent
          className={classNames({
            [NAVIGATION_ITEM_COLOR_CLASSNAME_ACTIVE]: isActive,
            [NAVIGATION_ITEM_COLOR_CLASSNAME]: !isActive,
            'h-6 w-6': shouldDisplayTitle,
            'h-8 w-8': !shouldDisplayTitle,
          })}
        />
        {
          title && shouldDisplayTitle &&
          <span
            className={classNames('text-sm', {
              [NAVIGATION_ITEM_COLOR_CLASSNAME_ACTIVE]: isActive,
              [NAVIGATION_ITEM_COLOR_CLASSNAME]: !isActive,
            })}
          >{title}</span>
        }
      </>
    )
  }, [icon, title, shouldDisplayTitle])

  return (
    <NavLink
      to={path}
      className={NAVIGATION_ITEM_CLASSNAME}
    >
      {(navLinkRenderProps) => render(navLinkRenderProps)}
    </NavLink>
  )
}