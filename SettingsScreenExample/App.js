import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SettingsScreen } from 'react-native-settings-screen'

export default class App extends React.Component {
  renderHero = () => (
    <View
      style={{
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Hero</Text>
    </View>
  )

  render() {
    const data = [
      { type: 'CUSTOM_VIEW', key: 'hero', render: this.renderHero },
      {
        type: 'SECTION',
        key: 'my-section',
        header: 'My Section'.toUpperCase(),
        footer:
          'Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
        rows: [
          { type: 'SIMPLE', onPress: () => {}, title: 'My row' },
          {
            type: 'SIMPLE',
            onPress: () => {},
            title: 'My other row',
            subtitle: 'Interesting!',
            hasDisclosureIndicator: true,
          },
          {
            type: 'SWITCH',
            onPress: () => {},
            title:
              'Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
            value: true,
            onValueChange: () => {},
          },
          {
            type: 'TEXT',
            onPress: () => {},
            title: 'Nulla vitae elit libero',
            text: 'Simplified',
          },
          {
            type: 'TEXT',
            onPress: () => {},
            title: 'Ipsum Lorem Venenatis',
            subtitle: 'Sub blabla blah blah',
            text: 'Yes',
            hasDisclosureIndicator: true,
          },
          {
            type: 'CUSTOM_VIEW',
            onPress: () => {},
            title: 'Ipsum Lorem',
            renderView: () => (
              <View
                style={{ width: 30, height: 30, backgroundColor: 'blue' }}
              />
            ),
            hasDisclosureIndicator: true,
          },
        ],
      },
      {
        type: 'SECTION',
        header: 'My Other Section'.toUpperCase(),
        rows: [
          { type: 'SIMPLE', onPress: () => {}, title: 'Single row' },
          {
            type: 'TEXT',
            onPress: () => {},
            title: 'Nulla vitae elit libero',
            text: 'Simplified',
          },
          {
            type: 'TEXT',
            onPress: () => {},
            title: 'Ipsum Lorem Venenatis',
            subtitle: 'Sub blabla blah blah',
            text: 'Yes',
            hasDisclosureIndicator: true,
          },
          {
            type: 'CUSTOM_VIEW',
            onPress: () => {},
            title: 'Ipsum Lorem',
            renderView: () => (
              <View
                style={{ width: 30, height: 30, backgroundColor: 'blue' }}
              />
            ),
            hasDisclosureIndicator: true,
          },
        ],
      },
      {
        type: 'CUSTOM_VIEW',
        render: () => (
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: '#999',
              marginBottom: 40,
              marginTop: -30,
            }}
          >
            Made in Taiwan
          </Text>
        ),
      },
    ]
    return (
      <View style={styles.container}>
        <SettingsScreen
          data={data}
          globalTextStyle={{ fontFamily: 'Avenir' }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
})
