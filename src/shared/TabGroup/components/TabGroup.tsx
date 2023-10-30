import { ReactElement } from 'react'
import { Tab } from '@headlessui/react'
import { TAB_GROUP_CONTAINER_CLASSNAME, TAB_GROUP_TAB_LIST_CLASSNAME, TAB_GROUP_TAB_PANEL_CLASSNAME, TAB_GROUP_TAB_PANEL_ITEM_CLASSNAME } from '../constants'
import { getKey, getTabListTabClassname } from '../helpers'

type TabContent = {
  key?: string | number,
  title: string,
  content: ReactElement
}

type TabGroupProps = {
  tabs: TabContent[]
}

export const TabGroup = ({ tabs }: TabGroupProps) => (
  <div className={TAB_GROUP_CONTAINER_CLASSNAME}>
    <Tab.Group>
      <Tab.List className={TAB_GROUP_TAB_LIST_CLASSNAME}>
        {
          tabs.map(({ key, title }) => (
            <Tab
              key={getKey(key, title)}
              className={getTabListTabClassname}
            >
              {title}
            </Tab>
          ))
        }
      </Tab.List>
      <Tab.Panels className={TAB_GROUP_TAB_PANEL_CLASSNAME}>
        {
          tabs.map(({ key, title, content }) => (
            <Tab.Panel
              key={getKey(key, title)}
              className={TAB_GROUP_TAB_PANEL_ITEM_CLASSNAME}
            >
              {
                content
              }
            </Tab.Panel>
          ))
        }
      </Tab.Panels>
    </Tab.Group>
  </div >
)
