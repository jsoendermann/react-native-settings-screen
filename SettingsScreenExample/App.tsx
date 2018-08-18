import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { SettingsScreen, SettingsData } from './lib'

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

export default class App extends React.Component {
  renderHero = () => (
    <View style={styles.heroContainer}>
      <Image source={require('../jan.jpg')} style={styles.heroImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.heroTitle}>Jan Söndermann</Text>
        <Text style={styles.heroSubtitle}>jan+git@primlo.com</Text>
      </View>
      <Icon
        style={{ marginTop: 3, marginRight: 6 }}
        name="chevron-small-right"
        size={25}
        color="#bbb"
      />
    </View>
  )

  render() {
    const data: SettingsData = [
      { type: 'CUSTOM_VIEW', key: 'hero', render: this.renderHero },
      {
        type: 'SECTION',
        header: 'My Section'.toUpperCase(),
        footer:
          'Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
        rows: [
          {
            type: 'SIMPLE',
            title: 'A row',
            onPress: () => {},
            showDisclosureIndicator: true,
          },
          { type: 'SIMPLE', title: 'A non-tappable row' },
          {
            type: 'SIMPLE',
            onPress: () => {},
            title: 'This row has a',
            subtitle: 'Subtitle',
            showDisclosureIndicator: true,
          },
          {
            type: 'SIMPLE',
            onPress: () => {},
            title: 'Long title. So long long long long long long long',
            subtitle:
              'And so is the subtitle. Even longer longer longer longer longer',
          },
          {
            type: 'SWITCH',
            title: 'Switch',
            value: true,
            onValueChange: () => {},
          },
          {
            type: 'TEXT',
            onPress: () => {},
            title: 'Text',
            text: 'Maybe',
          },
          {
            type: 'CUSTOM',
            onPress: () => {},
            title: 'Custom view',
            render: () => (
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: 'blue',
                }}
              />
            ),
            showDisclosureIndicator: true,
          },
        ],
      },
      {
        type: 'SECTION',
        header: 'My Other Section'.toUpperCase(),
        rows: [
          {
            type: 'SIMPLE',
            onPress: () => {},
            title: 'Dolor Nullam',
            showDisclosureIndicator: true,
          },
          {
            type: 'TEXT',
            onPress: () => {},
            title: 'Nulla vitae elit libero',
            text: 'Dapibus',
          },
          {
            type: 'TEXT',
            onPress: () => {},
            title: 'Ipsum Lorem Venenatis',
            subtitle: 'Vestibulum Inceptos Fusce Justo',
            text: 'Yes',
            showDisclosureIndicator: true,
          },
          {
            type: 'CUSTOM',
            onPress: () => {},
            title: 'Cras Euismod',
            render: () => (
              <Icon
                style={{ marginTop: 3, marginRight: 6 }}
                name="colours"
                size={32}
                color="black"
              />
            ),
            showDisclosureIndicator: true,
          },
        ],
      },
      {
        type: 'SECTION',
        header: 'My Third Section'.toUpperCase(),
        rows: [
          {
            type: 'SIMPLE',
            onPress: () => {},
            title: 'Single row',
            showDisclosureIndicator: true,
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
              fontFamily,
            }}
          >
            v1.2.3
          </Text>
        ),
      },
    ]
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#8c231a" />
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>Settings</Text>
        </View>
        <SettingsScreen data={data} globalTextStyle={{ fontFamily }} />
      </View>
    )
  }
}

const statusBarHeight = Platform.OS === 'ios' ? 35 : 0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    backgroundColor: '#8c231c',
    height: 44 + statusBarHeight,
    alignSelf: 'stretch',
    paddingTop: statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitle: {
    color: 'white',
    fontFamily,
    fontSize: 17,
  },
  heroContainer: {
    marginTop: 40,
    marginBottom: 50,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    flexDirection: 'row',
  },
  heroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
    marginHorizontal: 20,
  },
  heroTitle: {
    fontFamily,
    color: 'black',
    fontSize: 24,
  },
  heroSubtitle: {
    fontFamily,
    color: '#999',
    fontSize: 14,
  },
})
