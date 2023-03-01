import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { ExerciseData } from "./Programs";
import { Ionicons } from "@expo/vector-icons";

interface AddedExerciseProps {
  data: ExerciseData;
  exercises: ExerciseData[];
  setExercises: (exercises: ExerciseData[]) => void;
  updatePlanModal: boolean;
  newExercises: ExerciseData[];
  setNewExercises: (newExercises: ExerciseData[]) => void;
}

export const AddedExercise: React.FC<AddedExerciseProps> = ({
  data,
  setExercises,
  exercises,
  updatePlanModal,
  setNewExercises,
  newExercises,
}) => {
  const handleRemoveExercise = (id: string) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  const handleUpdateExercises = (id: string) => {
    setNewExercises(newExercises.filter((exercise) => exercise.id !== id));
  };

  return (
    <View style={styles.containerExercise}>
      <View>
        <View style={styles.containerInfoExercise}>
          <Text style={styles.fontTitle}>{data.nameExercise}</Text>
          <Ionicons
            style={styles.removeExercise}
            name="remove-circle"
            size={24}
            onPress={
              updatePlanModal
                ? () => handleUpdateExercises(data.id)
                : () => handleRemoveExercise(data.id)
            }
          />
        </View>
        <View>
          <Text style={styles.fontTarget}>{data.target}</Text>
        </View>
        <View style={styles.containerOptions}>
          <View style={styles.option}>
            <View>
              <Text style={styles.textOptions}>N. serie</Text>
            </View>
            <View style={styles.spacingInput}>
              <View style={styles.containerSeriesReps}>
                <View style={styles.borderRadius}>
                  <Text style={styles.fontSeriesReps}>{data.series}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.option}>
            <View>
              <Text style={styles.textOptions}>Ripetizioni</Text>
            </View>
            <View style={styles.spacingInput}>
              <View style={styles.containerSeriesReps}>
                <View style={styles.borderRadius}>
                  <Text style={styles.fontSeriesReps}>{data.reps}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerExercise: {
    marginTop: 25,
  },
  containerInfoExercise: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeExercise: {
    color: "#E93323",
  },
  fontTitle: {
    color: "#3B82F7",
    fontSize: 17,
    fontWeight: "bold",
  },
  fontTarget: {
    color: "white",
    fontWeight: "500",
  },
  containerOptions: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  option: {
    flex: 0.25,
  },
  textOptions: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 15,
  },
  spacingInput: {
    marginTop: 7,
  },
  fontSeriesReps: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  borderRadius: {
    backgroundColor: "#1C1C1E",
    paddingVertical: Platform.OS === "ios" ? 8 : 5,
    paddingHorizontal: 5,
    width: 50,
    borderRadius: 9,
  },
  containerSeriesReps: {
    alignItems: "center",
    justifyContent: "center",
  },
});
