import { interpolate } from "react-native-reanimated"
import { CalendarPageInterpolatorParams } from "react-native-swipe-calendar"

export function pageInterpolator({ focusAnim }: CalendarPageInterpolatorParams) {
  "worklet"
  
  const inputRange = [-1, 0, 1]
  
  // Ensure the current month has a higher zIndex than the surrounding months
  const zIndex = interpolate(focusAnim.value, inputRange, [0, 99, 0])
  
  // Fade the current month as it enters/leaves focus
  const opacity = interpolate(focusAnim.value, inputRange, [0, 1, 0])
  
  // Rotate the current month as it leaves focus
  const rotationDeg = interpolate(focusAnim.value, inputRange, [360, 0, 0])
  
  // Scale up the incoming month
  const scale = interpolate(focusAnim.value, inputRange, [2, 1, 0.25])
  
  return {
    opacity,
    zIndex,
    transform: [{ rotate: `${rotationDeg}deg` }, { scale }]
  }
}