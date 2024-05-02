import { useSelector } from "react-redux"
import getGradientCSSValue from "../utils/getGradientCSSValue"

export default function Gradient() {
  const gradientValues = useSelector(state => state.gradient)

  return (
    <div style={{backgroundImage: getGradientCSSValue(gradientValues).slice(0,-1) }} className="w-1/2 border-4 border-slate-400"></div>
  )
}