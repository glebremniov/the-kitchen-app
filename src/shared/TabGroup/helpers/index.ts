import classNames from 'classnames'
import { TAB_GROUP_TAB_LIST_ITEM_CLASSNAME, TAB_GROUP_TAB_LIST_ITEM_NOT_SELECTED_CLASSNAME, TAB_GROUP_TAB_LIST_ITEM_SELECTED_CLASSNAME } from '../constants'

type TabListClassNames = {
  selected: boolean
}

export const getTabListTabClassname = ({ selected }: TabListClassNames) =>
  classNames(TAB_GROUP_TAB_LIST_ITEM_CLASSNAME, selected
    ? TAB_GROUP_TAB_LIST_ITEM_SELECTED_CLASSNAME
    : TAB_GROUP_TAB_LIST_ITEM_NOT_SELECTED_CLASSNAME
  )

export const getKey = (key: string | number | undefined, title: string) => key || title