import * as React from 'react'
import { View, ViewStyle, TextStyle, ScrollViewProps } from 'react-native'
import styled from 'styled-components/native'

import { Section, SectionData } from './Section'

export type SettingsData = SettingsDatum[]
export type SettingsDatum = CustomViewData | SectionData

export interface CustomViewData {
  type: 'CUSTOM_VIEW'
  key?: string
  visible?: boolean,
  render: () => React.ReactElement<any>
}

export interface Props {
  style?: ViewStyle
  data: SettingsData
  globalTextStyle?: TextStyle
  scrollViewProps?: Partial<ScrollViewProps>
}

export class SettingsScreen extends React.Component<Props> {
  state = { refreshing: false }

  render() {
    const elements = this.props.data.filter(x => x.visible !== false).map((item, i) => {
      switch (item.type) {
        case 'CUSTOM_VIEW':
          return <View key={item.key || i}>{item.render()}</View>
        case 'SECTION':
          return (
            <Section
              key={item.header || i}
              section={item}
              globalTextStyle={this.props.globalTextStyle}
            />
          )
      }
    })

    const scrollViewProps: ScrollViewProps = {
      ...(this.props.scrollViewProps || {}),
      style: this.props.style,
    }

    return (
      <SettingsScrollView {...scrollViewProps}>{elements}</SettingsScrollView>
    )
  }
}

const SettingsScrollView = styled.ScrollView`
  flex: 1;
  align-self: stretch;
  background-color: hsl(0, 0%, 97%);
`
