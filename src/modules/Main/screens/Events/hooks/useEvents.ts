import { useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../core/hooks'
import { eventsListSelector, fetchEventsList, isEventsLoadingSelector } from '../../../stores'

export const useEvents = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [canRefreshLists, setCanRefreshLists] = useState(false)
  const dispatch = useAppDispatch()
  const events = useAppSelector(eventsListSelector)
  const isLoading = useAppSelector(isEventsLoadingSelector)

  const getEvents = useCallback(async () => {
    await dispatch(fetchEventsList())
    setTimeout(() => {
      setCanRefreshLists(true)
    }, 5000)
  }, [dispatch])

  const onRefresh = useCallback(() => {
    if (isRefreshing) return
    setIsRefreshing(true)
    setCanRefreshLists(true)

    // setTimeout just to show not quick refresh control
    setTimeout(async () => {
      await getEvents()
      setIsRefreshing(false)
      setCanRefreshLists(false)
    }, 1000)
  }, [getEvents, isRefreshing])

  return {
    isRefreshing,
    canRefreshLists,
    setCanRefreshLists,
    events,
    getEvents,
    setIsRefreshing,
    onRefresh,
    isLoading,
  }
}
