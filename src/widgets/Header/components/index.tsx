import { HeartIcon } from '@heroicons/react/24/solid'
import { UserProfileMenu } from './UserProfileMenu'

export const Header = () => (
  <header>
    <nav className="p-5 border">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <HeartIcon className="h-8 w-8 mr-2 text-indigo-500" />
          <span
            className="self-center text-xl font-semibold whitespace-nowrap"
          >The Kitchen App</span>
        </div>
        <div className="flex items-center">
          <UserProfileMenu />
        </div>
      </div>
    </nav>
  </header>
)