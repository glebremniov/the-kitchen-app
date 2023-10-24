import { DEFAULT_SVG_PROP_VALUE } from '../constants/IconConstants'
import { useDynamicSvgImport } from '../hooks/useDynamicSvgImport'

interface IconProps {
  name: string
  wrapperStyle?: string
  svgProp?: React.SVGProps<SVGSVGElement>
}

export const Icon = (props: IconProps) => {
  const { name: iconName, wrapperStyle, svgProp = DEFAULT_SVG_PROP_VALUE } = props
  const { loading, SvgIcon } = useDynamicSvgImport(iconName)

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
      )}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  )
}
