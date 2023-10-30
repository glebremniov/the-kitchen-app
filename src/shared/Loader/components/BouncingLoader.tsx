import { BOUNCING_LOADER_CLASSNAME, BOUNCING_LOADER_DEFAULT_TEXT } from '../constants'

type BouncingLoaderProps = {
  text?: string
}

export const BouncingLoader = ({ text = BOUNCING_LOADER_DEFAULT_TEXT }: BouncingLoaderProps) => (
  <button
    type="button"
    className={BOUNCING_LOADER_CLASSNAME}
    disabled
  >
    {text}
  </button>
)