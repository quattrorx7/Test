import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/core'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { PATHS } from '../../../../core/constants'
import { useInterval } from '../../../../core/hooks'
import { RootStackParamList } from '../../../../navigation/RootNavigator.types'
import { EventsPresenter } from './Events.presenter'
import { Event } from './Events.types'
import { useEvents } from './hooks'

export const EventsContainer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [shouldRefreshOnFocus, setShouldRefreshOnFocus] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const { canRefreshLists, isRefreshing, getEvents, onRefresh, events, isLoading } = useEvents()

  useInterval(() => {
    if (!isScrolling) {
      onRefresh()
    }
  }, 60000)

  useLayoutEffect(() => {
    getEvents()
  }, [getEvents])

  useFocusEffect(
    useCallback(() => {
      if (shouldRefreshOnFocus) {
        onRefresh()
        setShouldRefreshOnFocus(false)
      }
    }, [onRefresh, shouldRefreshOnFocus])
  )

  const handlePressOnEventItem = (event: Event) => () => {
    setShouldRefreshOnFocus(true)
    navigation.navigate(PATHS.EVENT_DETAILS, { event })
  }

  const handleScrollStart = useCallback(() => {
    setIsScrolling(true)
  }, [])

  const handleScrollEnd = useCallback(() => {
    setIsScrolling(false)
  }, [])

  return (
    <EventsPresenter
      onScrollEnd={handleScrollEnd}
      onScrollStart={handleScrollStart}
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      isRefreshDisabled={!canRefreshLists}
      getEventPressHandler={handlePressOnEventItem}
      data={events}
      isLoading={isLoading}
    />
  )
}
