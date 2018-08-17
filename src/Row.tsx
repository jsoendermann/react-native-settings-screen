import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Entypo'

import { IRow } from './types'

export interface Props extends IRow {
  titleStyles?: (TextStyle | undefined)[]
  subtitleStyles?: (TextStyle | undefined)[]
  isFirst: boolean
  isLast: boolean
  children?: any
}
export const Row = ({
  onPress,
  title,
  subtitle,
  hasDisclosureIndicator,
  isFirst,
  isLast,
  children,
  titleStyles,
  subtitleStyles,
}: Props) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'white',
      height: subtitle ? 56 : 44,
      alignItems: 'stretch',
    }}
    onPress={onPress}
  >
    <View
      style={{
        alignSelf: 'stretch',
        height: StyleSheet.hairlineWidth,
        marginLeft: isFirst ? 0 : 15,
        backgroundColor: '#ccc',
      }}
    />
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 15,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignSelf: 'stretch',
        }}
      >
        <View />
        <Text
          numberOfLines={1}
          style={[
            { color: 'black', fontSize: 17, marginRight: 15 },
            ...(titleStyles || []),
          ]}
        >
          {title}
        </Text>
        {subtitle && <Subtitle style={subtitleStyles}>{subtitle}</Subtitle>}
        <View />
      </View>
      {children}
      {hasDisclosureIndicator && (
        <Icon
          style={{ marginTop: 3, marginRight: 6 }}
          name="chevron-small-right"
          size={25}
          color="#bbb"
        />
      )}
    </View>
    {isLast && (
      <View
        style={{
          alignSelf: 'stretch',
          height: StyleSheet.hairlineWidth,

          backgroundColor: '#ccc',
        }}
      />
    )}
  </TouchableOpacity>
)

const Subtitle = styled.Text`
  color: #999;
  font-size: 13;
  margin-right: auto;
`
