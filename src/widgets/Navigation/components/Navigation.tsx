import { NAVIGATION_CLASSNAME, NAVIGATION_CONTAINER_CLASSNAME } from "../constants/NavigationConstants"
import { NavigationItem } from "./NavigationItem"
import navigationItems from '../data/navigation-items.json'

const items = navigationItems.map(item => <NavigationItem {...item} />)

export const Navigation = () => {

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