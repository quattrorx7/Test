import React, { FC, useCallback } from 'react'
import { Image, Text, View } from 'react-native'
import { Event } from '../Events/Events.types'
import { CommitsList } from './components'
import { styles } from './EventDetails.styles'
import { GetCommitItemPressHandler } from './EventDetails.types'

interface Props {
  data?: Event
  handlePressGoToRepo: (url: string) => void
  getCommitItemPressHandler: GetCommitItemPressHandler
}

export const EventDetailsPresenter: FC<Props> = ({
  data,
  getCommitItemPressHandler,
  handlePressGoToRepo,
}) => {
  const onPressGoToRepo = useCallback(() => {
    const repoUrl = data?.repo?.url

    if (repoUrl) {
      handlePressGoToRepo(data?.repo?.url)
    }
  }, [data?.repo?.url, handlePressGoToRepo])

  if (!data) return null

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={{ uri: data?.actor?.avatar_url }} style={styles.image} />
        <View style={styles.userInfo}>
          <Text style={styles.loginText}>{data?.actor?.login}</Text>
          <Text>
            <Text>Commits:</Text>
            {data?.payload?.size || '0'}
          </Text>
          <Text onPress={onPressGoToRepo} style={styles.repoText}>
            GO TO REPO
          </Text>
        </View>
      </View>
      <CommitsList
        getCommitItemPressHandler={getCommitItemPressHandler}
        data={data?.payload?.commits}
      />
    </View>
  )
}
