import { Dispatch, SetStateAction, useState } from 'react'

export type NavigationSettings = {
  shouldDisplayTitle: boolean
}

export type Settings = {
  navigation: NavigationSettings
}

const INITIAL_SETTINGS: Settings = Object.freeze({
  navigation: {
    shouldDisplayTitle: false
  }
})

export const useSettings = ():
  [Settings, Dispatch<SetStateAction<Settings>>] => {
  const [settings, setSettings] = useState<Settings>(INITIAL_SETTINGS)

  return [settings, setSettings]
}