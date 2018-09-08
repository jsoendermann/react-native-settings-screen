# React Native Settings Screen

This library takes a JavaScript object that describes your settings and turns it into a beautiful component ready to be used.

![react-native-settings-screen ios](https://raw.githubusercontent.com/jsoendermann/react-native-settings-screen/master/imgs/ios.png)
![react-native-settings-screen android](https://github.com/jsoendermann/react-native-settings-screen/raw/master/imgs/android.png)

## Installation

    yarn add react-native-settings-screen

## Run Example

    git clone https://github.com/jsoendermann/react-native-settings-screen
    cd react-native-settings-screen/SettingsScreenExample
    yarn install
    yarn build
    react-native run-ios

## Usage

`import { SettingsScreen } from "react-native-settings-screen"`

`SettingsScreen` takes a `data` prop; an object that describes the content of your settings. You can learn more about the format of this object [in this file](https://github.com/jsoendermann/react-native-settings-screen/blob/master/SettingsScreenExample/App.tsx). The screen on the example screenshots above was generated from this object:

```javascript
const data: SettingsData = [
  { type: 'CUSTOM_VIEW', key: 'hero', render: this.renderHero },
  {
    type: 'SECTION',
    header: 'My Section'.toUpperCase(),
    footer:
      'Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    rows: [
      {
        title: 'A row',
        showDisclosureIndicator: true,
      },
      { title: 'A non-tappable row' },
      {
        title: 'This row has a',
        subtitle: 'Subtitle',
        showDisclosureIndicator: true,
      },
      {
        title: 'Long title. So long long long long long long long',
        subtitle:
          'And so is the subtitle. Even longer longer longer longer longer',
      },
      {
        title: 'Switch',
        renderAccessory: () => <Switch value onValueChange={() => {}} />,
      },
      {
        title: 'Text',
        renderAccessory: () => (
          <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
            Maybe
          </Text>
        ),
      },
      {
        title: 'Custom view',
        renderAccessory: () => (
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
        title: 'Dolor Nullam',
        showDisclosureIndicator: true,
      },
      {
        title: 'Nulla vitae elit libero',
        renderAccessory: () => (
          <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
            Dapibus
          </Text>
        ),
      },
      {
        title: 'Ipsum Lorem Venenatis',
        subtitle: 'Vestibulum Inceptos Fusce Justo',
        renderAccessory: () => (
          <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
            Yes
          </Text>
        ),
        showDisclosureIndicator: true,
      },
      {
        title: 'Cras Euismod',
        renderAccessory: () => (
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
        title: 'Different title style',
        showDisclosureIndicator: true,
        titleStyle: {
          color: 'red',
        },
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
```
