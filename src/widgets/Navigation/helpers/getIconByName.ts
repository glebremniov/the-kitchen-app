import {
  HomeIcon as HomeSolid,
  PlusCircleIcon as AddSolid,
  InformationCircleIcon as InfoSolid,
  ChartPieIcon as StatisticsSolid,
  Cog6ToothIcon as SettingsSolid,
} from '@heroicons/react/20/solid'

import {
  HomeIcon as HomeOutline,
  PlusCircleIcon as AddOutline,
  InformationCircleIcon as InfoOutline,
  ChartPieIcon as StatisticsOultine,
  Cog6ToothIcon as SettingsOutline,
} from '@heroicons/react/24/outline'

type IconType = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>

const activeIcons: Record<string, IconType> = {
  'home': HomeSolid,
  'statistics': StatisticsSolid,
  'submit': AddSolid,
  'info': InfoSolid,
  'settings': SettingsSolid,
}


const inactiveIcons: Record<string, IconType> = {
  'home': HomeOutline,
  'statistics': StatisticsOultine,
  'submit': AddOutline,
  'info': InfoOutline,
  'settings': SettingsOutline,
}

export const getIconByName = (name: string, isActive: boolean = false) => {
  const icons = isActive ? activeIcons : inactiveIcons
  return icons[name] || HomeOutline
} 