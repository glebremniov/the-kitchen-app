import { Dispatch, SetStateAction } from 'react'
import { NavigationSettings, useSettings } from '../../../features/Settings'

export const useNavigationSettings = ():
  [NavigationSettings, Dispatch<SetStateAction<NavigationSettings>>] => {
  const [{ navigation }, setSettings] = useSettings()

  const setNavigationSettings = (newValue: SetStateAction<NavigationSettings>) => {
    setSettings(settings => ({
      ...settings,
      navigation: ({
        ...settings.navigation,
        ...newValue
      })
    }))
  }

  return [navigation, setNavigationSettings]
}