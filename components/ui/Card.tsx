import { StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"

type CardProps = {
  children: React.ReactNode
}
function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>
}

export default Card
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    backgroundColor: Colors.primary800,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
})
