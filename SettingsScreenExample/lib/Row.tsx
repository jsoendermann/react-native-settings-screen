import * as React from 'react'
import { Switch } from 'react-native'
import styled from 'styled-components/native'

import { RowSkeleton } from './RowSkeleton'
import { RowData } from './types'
import { TextStyle } from 'react-native'

export interface RowProps {
  rowData: RowData
  isFirst: boolean
  isLast: boolean
  globalTextStyle?: TextStyle
}

export const Row = ({
  rowData,
  isFirst,
  isLast,
  globalTextStyle,
}: RowProps) => {
  const rowSkeletonProps = {
    titleStyles: [globalTextStyle, rowData.titleStyle],
    subtitleStyles: [globalTextStyle],
    isFirst,
    isLast,
    ...rowData,
  }

  switch (rowData.type) {
    case 'SIMPLE':
      return <RowSkeleton {...rowSkeletonProps} />

    case 'SWITCH':
      return (
        <RowSkeleton {...rowSkeletonProps}>
          <Switch
            value={rowData.value}
            onValueChange={rowData.onValueChange}
            onTintColor={rowData.onTintColor}
            thumbTintColor={rowData.thumbTintColor}
          />
        </RowSkeleton>
      )

    case 'TEXT':
      return (
        <RowSkeleton {...rowSkeletonProps}>
          <TextRowText style={globalTextStyle}>{rowData.text}</TextRowText>
        </RowSkeleton>
      )

    case 'CUSTOM':
      return <RowSkeleton {...rowSkeletonProps}>{rowData.render()}</RowSkeleton>
  }
}

const TextRowText = styled.Text`
  color: #999;
  margin-right: 6;
  font-size: 18;
`
