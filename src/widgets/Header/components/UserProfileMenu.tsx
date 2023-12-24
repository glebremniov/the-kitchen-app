import { Menu, Transition } from '@headlessui/react'
import {
  UserCircleIcon,
  PencilSquareIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/20/solid'
import {
  UserCircleIcon as UserCircleOutlineIcon
} from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'


type UserProfileMenuActionItemProps = {
  to: string,
  children: React.ReactNode
}

const UserProfileMenuActionItem = ({ to, children }: UserProfileMenuActionItemProps) => (
  <div className="px-1 py-1">
    <Menu.Item>
      <Link to={to}
        className="text-gray-800 group flex w-full items-center rounded-md px-2 py-2"
      >{children}
      </Link>
    </Menu.Item>
  </div>
)

export const UserProfileMenu = () => (
  <div>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <UserCircleOutlineIcon className="h-8 w-8 text-gray-500" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">

          <UserProfileMenuActionItem
            to='/profile'
          >
            <UserCircleIcon
              className="mr-2 h-5 w-5"
              aria-hidden="true"
            />
            Show
          </UserProfileMenuActionItem>

          <UserProfileMenuActionItem
            to='/profile/edit'
          >
            <PencilSquareIcon
              className="mr-2 h-5 w-5"
              aria-hidden="true"
            />
            Edit
          </UserProfileMenuActionItem>

          <UserProfileMenuActionItem
            to='/logout'
          >
            <div className='text-red-500 inline-flex'>
              <ArrowRightOnRectangleIcon
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              Log out
            </div>
          </UserProfileMenuActionItem>
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
)