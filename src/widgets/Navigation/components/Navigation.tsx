import { useMemo } from 'react'
import { NAVIGATION_CLASSNAME, NAVIGATION_CONTAINER_CLASSNAME } from '../constants/NavigationConstants'
import { NavigationItem } from './NavigationItem'
import navigationItems from '../data/navigation-items.json'
import { useNavigationSettings } from '../hooks'

export const Navigation = () => {

  const [{ shouldDisplayTitle }] = useNavigationSettings()

  const items = useMemo(() => {
    return navigationItems.map(item =>
      <NavigationItem
        {...item}
        shouldDisplayTitle={shouldDisplayTitle}
      />
    )
  }, [shouldDisplayTitle])

  return (
    <div className={NAVIGATION_CLASSNAME}>
      <div className={NAVIGATION_CONTAINER_CLASSNAME}>
        {
          items
        }
      </div>
    </div>
  )
}