import React, { FC } from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import { Event, GetEventItemPressHandler } from '../../Events.types'
import { EventItem } from './EventItem'

interface Props {
  data: Event[]
  isRefreshDisabled: boolean
  onRefresh: () => void
  onScrollStart: () => void
  onScrollEnd: () => void
  getEventPressHandler: GetEventItemPressHandler
  isRefreshing: boolean
}

interface GetOrderItemRendererProps {
  item: Event
}

const getOrderItemRenderer =
  (getEventPressHandler: GetEventItemPressHandler) =>
  ({ item }: GetOrderItemRendererProps) => {
    const onPress = getEventPressHandler(item)

    return <EventItem item={item} onPress={onPress} />
  }

const getRefreshControlRenderer = (
  isRefreshing: boolean,
  onRefresh: () => void,
  isRefreshDisabled?: boolean
) => {
  if (isRefreshDisabled) return

  return <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
}

const renderItemSeparator = () => <View style={styles.separator} />

export const EventsList: FC<Props> = ({
  data,
  getEventPressHandler,
  onRefresh,
  onScrollEnd,
  onScrollStart,
  isRefreshDisabled,
  isRefreshing = false,
}) => {
  const renderItem = getOrderItemRenderer(getEventPressHandler)
  const renderRefreshControl = getRefreshControlRenderer(isRefreshing, onRefresh, isRefreshDisabled)

  return (
    <FlatList
      ItemSeparatorComponent={renderItemSeparator}
      contentContainerStyle={styles.contentContainer}
      refreshControl={renderRefreshControl}
      data={data}
      keyExtractor={(item) => item.id}
      onScrollBeginDrag={onScrollStart}
      onScrollEndDrag={onScrollEnd}
      onMomentumScrollBegin={onScrollStart}
      onMomentumScrollEnd={onScrollEnd}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    paddingBottom: 16,
  },
  contentContainer: {
    padding: 16,
  },
})
