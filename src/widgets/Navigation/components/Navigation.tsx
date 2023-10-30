import { NAVIGATION_CLASSNAME, NAVIGATION_CONTAINER_CLASSNAME } from '../constants'
import { NavigationItem } from './NavigationItem'
import { useNavigationItems } from '../hooks'

export const Navigation = () => {

  const navItems = useNavigationItems()

  return (
    <div className={NAVIGATION_CLASSNAME}>
      <nav className={NAVIGATION_CONTAINER_CLASSNAME}>
        {
          navItems.map(props => <NavigationItem {...props} />)
        }
      </nav>
    </div>
  )
}