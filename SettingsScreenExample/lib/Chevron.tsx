import * as React from 'react'
import { StyleSheet, Image, ImageStyle } from 'react-native'

export interface ChevronProps {
  style?: ImageStyle
}

export const Chevron = ({ style }: ChevronProps) => (
  <Image
    style={[defaultStyles.chevron, style]}
    source={require('../../chevron3.png')}
  />
)

const defaultStyles = StyleSheet.create({
  chevron: {
    width: 12,
    height: 12,
    marginLeft: 8,
    marginRight: 10,
    opacity: 0.35,
  },
})
