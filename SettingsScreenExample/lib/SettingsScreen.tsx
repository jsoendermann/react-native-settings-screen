import * as React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'
import styled from 'styled-components/native'

import { Section } from './Section'
import { SettingsData } from './types'

export interface Props {
  style?: ViewStyle
  data: SettingsData
  globalTextStyle?: TextStyle
}

export class SettingsScreen extends React.Component<Props> {
  render() {
    const elements = this.props.data.map((item, i) => {
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

    return (
      <SettingsScrollView style={this.props.style}>
        {elements}
      </SettingsScrollView>
    )
  }
}

const SettingsScrollView = styled.ScrollView`
  flex: 1;
  align-self: stretch;
  background-color: hsl(0, 0%, 97%);
`
