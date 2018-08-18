import { TextStyle } from 'react-native'

export type SettingsData = SettingsDatum[]
export type SettingsDatum = CustomView | Section

export interface CustomView {
  type: 'CUSTOM_VIEW'
  key?: string
  render: () => React.ReactElement<any>
}

export interface Section {
  type: 'SECTION'
  key?: string
  header?: string
  footer?: string | (() => React.ReactElement<any>)
  rows: RowData[]
}

export type RowData = SimpleRow | SwitchRow | TextRow | CustomRow

export interface IRow {
  title: string
  onPress?: () => void
  subtitle?: string
  showDisclosureIndicator?: boolean
}

export interface SimpleRow extends IRow {
  type: 'SIMPLE'
}

export interface SwitchRow extends IRow {
  type: 'SWITCH'
  value: boolean
  onValueChange: (newValue: boolean) => void
  onTintColor?: string
  thumbTintColor?: string
}

export interface TextRow extends IRow {
  type: 'TEXT'
  text: string
  textStyle?: TextStyle
}

export interface CustomRow extends IRow {
  type: 'CUSTOM'
  render: () => React.ReactElement<any>
}
