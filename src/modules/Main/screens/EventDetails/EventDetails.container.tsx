import React, { FC, useCallback } from 'react'
import { EventDetailsScreenRouteProp } from '../../../../navigation/RootNavigator.types'

import { EventDetailsPresenter } from './EventDetails.presenter'

interface Props {
  route: EventDetailsScreenRouteProp
}

export const EventDetailsContainer: FC<Props> = ({ route }) => {
  const { event } = route?.params || {}

  const handlePressGoToRepo = useCallback((repoUrl: string) => {
    console.log(
      '🚀 ~ file: EventDetails.container.tsx ~ line 15 ~ handlePressGoToRepo ~ repoUrl',
      repoUrl
    )
  }, [])

  const handlePressCommitItem = (url: string) => () => {
    console.log(
      '🚀 ~ file: EventDetails.container.tsx ~ line 22 ~ handlePressCommitItem ~ url',
      url
    )
  }

  return (
    <EventDetailsPresenter
      getCommitItemPressHandler={handlePressCommitItem}
      handlePressGoToRepo={handlePressGoToRepo}
      data={event}
    />
  )
}
