import React, { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../../../../core/constants/COLORS'
import { Commit } from '../../../Events/Events.types'

interface Props {
  item: Commit
  onPress: () => void
}

export const CommitItem: FC<Props> = ({ item, onPress }) => (
  <Pressable style={styles.container} onPress={onPress}>
    <View style={styles.userInfoContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.propertyText}>Commit message</Text>
        <Text numberOfLines={2}>{item?.message}</Text>
      </View>
      <Text style={styles.repoText}>GO TO COMMIT</Text>
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  container: {
    padding: 16,
    backgroundColor: COLORS.GRAY4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  loginText: {
    paddingBottom: 8,
  },
  repoText: {
    color: COLORS.BLUE,
    fontWeight: 'bold',
  },
  propertyText: {
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
})
