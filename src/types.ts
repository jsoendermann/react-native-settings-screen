export type Item = CustomView | Section

export interface CustomView {
  type: 'CUSTOM_VIEW'
  key?: string
  render: () => React.ReactElement<any>
}

export interface Section {
  type: 'SECTION'
  key: string
  header?: string
  footer?: string | (() => React.ReactElement<any>)
  rows: Row[]
}

type Row = SimpleRow | SwitchRow | TextRow | CustomViewRow

export interface IRow {
  title: string
  onPress: () => void
  subtitle?: string
  hasDisclosureIndicator?: boolean
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
}

export interface CustomViewRow extends IRow {
  type: 'CUSTOM_VIEW'
  renderView: () => React.ReactElement<any>
}
