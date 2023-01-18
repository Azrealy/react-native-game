import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

type InstructionTextProps = {
  children: React.ReactNode
  style?: any
}
function InstructionText({ children, style }: InstructionTextProps) {
  return <Text style={[styles.container, style]}>{children}</Text>
}

export default InstructionText
const styles = StyleSheet.create({
  container: {
    color: Colors.accent500,
    fontSize: 24,
  }
})
