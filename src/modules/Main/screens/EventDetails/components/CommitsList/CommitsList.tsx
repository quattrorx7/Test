import React, { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Commit } from '../../../Events/Events.types'
import { GetCommitItemPressHandler } from '../../EventDetails.types'

import { CommitItem } from './CommitItem'

interface Props {
  data: Commit[]
  getCommitItemPressHandler: GetCommitItemPressHandler
}

interface GetOrderItemRendererProps {
  item: Commit
}

const getOrderItemRenderer =
  (getCommitItemPressHandler: any) =>
  ({ item }: GetOrderItemRendererProps) => {
    const onPress = getCommitItemPressHandler(item.url)

    return <CommitItem item={item} onPress={onPress} />
  }

const renderItemSeparator = () => <View style={styles.separator} />

export const CommitsList: FC<Props> = ({ data, getCommitItemPressHandler }) => {
  const renderItem = getOrderItemRenderer(getCommitItemPressHandler)

  return (
    <FlatList
      ItemSeparatorComponent={renderItemSeparator}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => item?.sha}
      data={data}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    paddingBottom: 16,
  },
  contentContainer: {
    paddingTop: 24,
  },
})
