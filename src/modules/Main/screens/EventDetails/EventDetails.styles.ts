import { StyleSheet } from 'react-native'
import { COLORS } from '../../../../core/constants/COLORS'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 16,
  },
  repoText: {
    marginTop: 8,
    color: COLORS.BLUE,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  userInfo: {
    marginLeft: 16,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
})
