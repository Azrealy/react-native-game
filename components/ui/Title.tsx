import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

type TitleProps = {
  children: React.ReactNode
}
function Title({ children }: TitleProps) {
  return <Text style={styles.titleContainer}>{children}</Text>
}

export default Title
const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12
  }
})
