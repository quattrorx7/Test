import React, { FC } from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import { EventItem } from '../../../Events/components/EventsList/EventItem'
import { Event, GetEventItemPressHandler } from '../../../Events/Events.types'

interface Props {
  data: Event[]
  onRefresh: () => void
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
  hideControl?: boolean
) => {
  if (hideControl) return

  return <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
}

const renderItemSeparator = () => <View style={styles.separator} />

export const EventsList: FC<Props> = ({
  data,
  getEventPressHandler,
  onRefresh,
  isRefreshing = false,
}) => {
  const renderItem = getOrderItemRenderer(getEventPressHandler)
  const renderRefreshControl = getRefreshControlRenderer(isRefreshing, onRefresh)

  return (
    <FlatList
      ItemSeparatorComponent={renderItemSeparator}
      contentContainerStyle={styles.contentContainer}
      refreshControl={renderRefreshControl}
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
    padding: 16,
  },
})
