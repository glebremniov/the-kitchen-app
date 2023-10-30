import { ReactElement } from 'react'
import { TabGroup } from '.'

type DMYTabGroupProps = {
  day: ReactElement
  month: ReactElement
  year: ReactElement
}

const buildTabs = ({ day, month, year }: DMYTabGroupProps) => (
  [
    {
      title: 'Per Day',
      content: day
    },
    {
      title: 'Per Month',
      content: month
    },
    {
      title: 'Per Year',
      content: year
    }
  ]
)

export const DMYTabGroup = (props: DMYTabGroupProps) =>
  <TabGroup tabs={buildTabs(props)} />