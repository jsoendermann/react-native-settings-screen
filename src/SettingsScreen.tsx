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
  Switch,
} from 'react-native'

import { Row } from './Row'
import { Item, SimpleRow, Section } from './types'

export interface Props {
  style?: ViewStyle
  data: Item[]
  globalTextStyle?: TextStyle
}

export class SettingsScreen extends React.Component<Props> {
  renderSection(section: Section) {
    let elements: React.ReactElement<any>[] = []
    if (section.header) {
      elements.push(
        <Text
          key={section.header}
          style={[
            {
              marginLeft: 20,
              marginBottom: 8,
              color: '#999',
              fontSize: 14,
            },
            this.props.globalTextStyle,
          ]}
        >
          {section.header}
        </Text>,
      )
    }

    for (let i = 0; i < section.rows.length; i++) {
      const row = section.rows[i]
      const isFirst = i === 0
      const isLast = i === section.rows.length - 1

      switch (row.type) {
        case 'SIMPLE':
          elements.push(
            <Row
              titleStyles={[this.props.globalTextStyle]}
              subtitleStyles={[this.props.globalTextStyle]}
              key={row.title}
              {...row}
              isFirst={isFirst}
              isLast={isLast}
            />,
          )
          break

        case 'SWITCH':
          elements.push(
            <Row
              titleStyles={[this.props.globalTextStyle]}
              subtitleStyles={[this.props.globalTextStyle]}
              key={row.title}
              {...row}
              isFirst={isFirst}
              isLast={isLast}
            >
              <Switch
                style={{ marginRight: 10 }}
                onTintColor={row.onTintColor}
                thumbTintColor={row.thumbTintColor}
                value={row.value}
                onValueChange={row.onValueChange}
              />
            </Row>,
          )
          break

        case 'TEXT':
          elements.push(
            <Row
              titleStyles={[this.props.globalTextStyle]}
              subtitleStyles={[this.props.globalTextStyle]}
              key={row.title}
              {...row}
              isFirst={isFirst}
              isLast={isLast}
            >
              <Text
                style={[
                  {
                    color: 'gray',
                    marginRight: 10,
                    fontSize: 17,
                  },
                  this.props.globalTextStyle,
                ]}
              >
                {row.text}
              </Text>
            </Row>,
          )
          break

        case 'CUSTOM_VIEW':
          elements.push(
            <Row
              titleStyles={[this.props.globalTextStyle]}
              subtitleStyles={[this.props.globalTextStyle]}
              key={row.title}
              {...row}
              isFirst={isFirst}
              isLast={isLast}
            >
              {row.renderView()}
            </Row>,
          )
          break
      }
    }

    if (typeof section.footer === 'string') {
      elements.push(
        <View
          key={section.footer}
          style={{
            marginHorizontal: 30,
            marginTop: 8,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {section.footer.split(' ').map((t, i) => (
            <Text
              key={i}
              style={[
                {
                  fontSize: 14,
                  color: '#999',
                },
                this.props.globalTextStyle,
              ]}
            >
              {t + ' '}
            </Text>
          ))}
        </View>,
      )
    } else if (typeof section.footer === 'function') {
      elements.push(section.footer())
    }

    return elements
  }

  render() {
    const itemElements = this.props.data.map((item, i) => {
      switch (item.type) {
        case 'CUSTOM_VIEW':
          return <View key={item.key || i}>{item.render()}</View>
        case 'SECTION':
          return (
            <View
              key={item.header || i}
              style={{ alignItems: 'stretch', marginBottom: 50 }}
            >
              {this.renderSection(item)}
            </View>
          )
      }
    })

    return (
      <ScrollView
        style={[
          { flex: 1, alignSelf: 'stretch', backgroundColor: 'hsl(0, 0%, 97%)' },
          this.props.style,
        ]}
      >
        {itemElements}
      </ScrollView>
    )
  }
}
