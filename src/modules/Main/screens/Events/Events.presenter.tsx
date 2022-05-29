import React, { FC } from 'react'
import { ActivityIndicator } from 'react-native'
import { EventsList } from './components'
import { styles } from './Events.styles'
import { Event, GetEventItemPressHandler } from './Events.types'

interface Props {
  data: Event[]
  isLoading: boolean
  isRefreshing: boolean
  isRefreshDisabled: boolean
  onRefresh: () => void
  onScrollStart: () => void
  onScrollEnd: () => void
  getEventPressHandler: GetEventItemPressHandler
}

export const EventsPresenter: FC<Props> = ({
  data,
  isLoading,
  onRefresh,
  onScrollStart,
  onScrollEnd,
  isRefreshDisabled,
  isRefreshing,
  getEventPressHandler,
}) => {
  if (isLoading && !isRefreshing) {
    return <ActivityIndicator style={styles.loader} />
  }

  return (
    <EventsList
      onScrollEnd={onScrollEnd}
      onScrollStart={onScrollStart}
      isRefreshDisabled={isRefreshDisabled}
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      getEventPressHandler={getEventPressHandler}
      data={data}
    />
  )
}
