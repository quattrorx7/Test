import React, { FC } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../../../../core/constants/COLORS'
import { Event } from '../../Events.types'

interface Props {
  item: Event
  onPress: () => void
}

export const EventItem: FC<Props> = ({ item, onPress }) => (
  <Pressable style={styles.container} onPress={onPress}>
    <View style={styles.infoContainer}>
      <Image style={styles.image} source={{ uri: item?.actor?.avatar_url }} />
      <View style={styles.userInfoContainer}>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.loginText}>
            <Text style={styles.propertyText}>Login:</Text> {item?.actor?.login}
          </Text>
          <Text>
            <Text style={styles.propertyText}>ID:</Text> {item?.actor?.id}
          </Text>
        </View>
        <Text style={styles.repoText}>REPO</Text>
      </View>
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 16,
  },
  textContainer: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
})
