import * as React from 'react'
import {
  Text,
  View,
  ScrollView,
  ViewStyle,
  TextStyle,
  Switch,
  StyleSheet,
} from 'react-native'
import styled from 'styled-components/native'

import { Row } from './Row'
import { SettingsData, Section, RowData } from './types'

export interface Props {
  style?: ViewStyle
  data: SettingsData
  globalTextStyle?: TextStyle
}

export class SettingsScreen extends React.Component<Props> {
  renderRow(rowData: RowData, isFirst: boolean, isLast: boolean) {
    const rowProps = {
      titleStyles: [this.props.globalTextStyle],
      subtitleStyles: [this.props.globalTextStyle],
      key: rowData.title,
      isFirst,
      isLast,
      ...rowData,
    }

    switch (rowData.type) {
      case 'SIMPLE':
        return <Row {...rowProps} />

      case 'SWITCH':
        return (
          <Row {...rowProps}>
            <Switch
              value={rowData.value}
              onValueChange={rowData.onValueChange}
              onTintColor={rowData.onTintColor}
              thumbTintColor={rowData.thumbTintColor}
            />
          </Row>
        )

      case 'TEXT':
        return (
          <Row {...rowProps}>
            <TextRowText style={this.props.globalTextStyle}>
              {rowData.text}
            </TextRowText>
          </Row>
        )

      case 'CUSTOM':
        return <Row {...rowProps}>{rowData.render()}</Row>
    }
  }

  renderSection(section: Section) {
    let elements: React.ReactElement<any>[] = []

    if (section.header) {
      elements.push(
        <SectionHeader
          key={section.header}
          style={[this.props.globalTextStyle]}
        >
          {section.header}
        </SectionHeader>,
      )
    }

    for (let i = 0; i < section.rows.length; i++) {
      const rowData = section.rows[i]
      const isFirst = i === 0
      const isLast = i === section.rows.length - 1

      elements.push(this.renderRow(rowData, isFirst, isLast))
    }

    if (typeof section.footer === 'string') {
      elements.push(
        <SectionFooter key={section.footer} style={this.props.globalTextStyle}>
          {section.footer}
        </SectionFooter>,
      )
    } else if (typeof section.footer === 'function') {
      elements.push(section.footer())
    }

    return elements
  }

  render() {
    const elements = this.props.data.map((item, i) => {
      switch (item.type) {
        case 'CUSTOM_VIEW':
          return <View key={item.key || i}>{item.render()}</View>
        case 'SECTION':
          return (
            <SectionContainer key={item.header || i}>
              {this.renderSection(item)}
            </SectionContainer>
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

const SectionContainer = styled.View`
  align-items: stretch;
  margin-bottom: 50;
`

const SectionHeader = styled.Text`
  margin-left: 20;
  margin-bottom: 8;
  color: #999;
  font-size: 14;
`

const TextRowText = styled.Text`
  color: #999;
  margin-right: 6;
  font-size: 18;
`

const SectionFooter = styled.Text`
  margin-top: 8;
  font-size: 15;
  color: #999;
  margin-horizontal: 15;
`
