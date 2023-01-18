import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import { Ionicons } from '@expo/vector-icons';
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/game/GuessLogItem";

type GameScreenProps = {
  userChoice: number,
  onGameOver: (numberOfRounds: number) => void
}

const generateNumber = (max: number, min: number, exclude: number): number => {
  if (max - min === 2) {
    return min + 1;
  }
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateNumber(max, min, exclude)
  } else {
    return randomNumber
  }
}

let minBoudary = 1;
let maxBoudary = 100;

function GameScreen({ userChoice, onGameOver }: GameScreenProps) {
  const generateGuessNumber = generateNumber(maxBoudary, minBoudary, userChoice)
  const [currentGuess, setCurrentGusss] = useState(generateGuessNumber)
  const [guessRounds, setGuessRounds] = useState([generateGuessNumber])

  useEffect(() => {
    minBoudary = 1;
    maxBoudary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userChoice, onGameOver])


  const nextGuessHandler = (direction: string) => {
    if ((direction === "lower" && currentGuess > userChoice)
      || (direction === "higher" && currentGuess < userChoice)) {
      Alert.alert("Dont lie,", "You know you choice the wrong direction")
    } else {
      if (direction === "lower") {
        minBoudary = currentGuess
      } else {
        maxBoudary = currentGuess
      }

      const newRoundNumber = generateNumber(maxBoudary, minBoudary, currentGuess)
      setCurrentGusss(newRoundNumber)
      setGuessRounds((prevGuessRounds) => [newRoundNumber, ...prevGuessRounds])
    }
  }

  const guessRoundsArrayLength = guessRounds.length
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>

              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listConatiner}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsArrayLength - itemData.index}
              guess={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 22,
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  listConatiner: {
    flex: 1,
    padding: 16
  }
});
