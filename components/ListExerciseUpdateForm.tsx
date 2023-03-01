import React, { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  Vibration,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SearchInput } from "./SearchInput";
import { Exercise } from "./Exercise";
import { useContext } from "react";
import { ContextApp } from "../Navigation/TabNavigator";
import { AddSeriesReps } from "./AddSeriesReps";
import { ExerciseData } from "./Programs";
import { AddNewExercise } from "./AddNewExercise";

interface ListExerciseProps {
  updatePlanModal: boolean;
  updateExercisesForm: boolean;
  setUpdateExercisesForm: (ExerciseForm: boolean) => void;
  newExercises: ExerciseData[];
  setNewExercises: (newExercises: ExerciseData[]) => void;
  newExerciseName: string;
  setNewExerciseName: (newExerciseName: string) => void;
  newExerciseTarget: string;
  setNewExerciseTarget: (newExerciseTarget: string) => void;
}

export const ListExerciseUpdateForm: React.FC<ListExerciseProps> = ({
  updateExercisesForm,
  updatePlanModal,
  setUpdateExercisesForm,
  newExerciseName,
  newExerciseTarget,
  newExercises,
  setNewExercises,
  setNewExerciseTarget,
  setNewExerciseName,
}) => {
  const { filteredExercises, setFilteredExercises, dataApi } =
    useContext(ContextApp);
  const [seriesRepsModal, setSeriesRepsModal] = useState<boolean>(false);
  const [newExerciseModal, setNewExerciseModal] = useState<boolean>(false);
  const [newExerciseSeries, setNewExerciseSeries] = useState<string>("");
  const [newExerciseReps, setNewExerciseReps] = useState<string>("");
  const uniqueId = uuidv4();

  const handleUpdateSaveExercise = () => {
    if (newExerciseSeries === "" || newExerciseReps === "") {
      Vibration.vibrate([0, 50, 0, 0]);
    } else {
      let ObjectExercise = {
        id: uniqueId,
        nameExercise: newExerciseName,
        series: newExerciseSeries,
        reps: newExerciseReps,
        target: newExerciseTarget,
      };

      setNewExercises([...newExercises, ObjectExercise]);
      setSeriesRepsModal(false);
    }
  };

  const handleUpdateNewExercise = () => {
    if (
      newExerciseName === "" ||
      newExerciseTarget === "" ||
      newExerciseSeries === "" ||
      newExerciseReps === ""
    ) {
      Vibration.vibrate([0, 50, 0, 0]);
    } else {
      let ObjectNewExercise = {
        id: uniqueId,
        nameExercise: newExerciseName,
        series: newExerciseSeries,
        reps: newExerciseReps,
        target: newExerciseTarget,
      };

      setNewExercises([...newExercises, ObjectNewExercise]);
      setNewExerciseModal(false);
      setNewExerciseName("");
      setNewExerciseTarget("");
      setNewExerciseSeries("");
      setNewExerciseReps("");
    }
  };

  const handleCloseUpdateExerciseForm = () => {
    setUpdateExercisesForm(false);
    setFilteredExercises(dataApi);
  };

  const handleNewExerciseForm = () => {
    setUpdateExercisesForm(false);
    setNewExerciseModal(true);
  };

  return (
    <View>
      <Modal
        visible={updateExercisesForm}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <View style={styles.main}>
              <View>
                <View style={styles.containerButton}>
                  <View style={styles.flex}>
                    <AntDesign
                      style={styles.closeBtn}
                      name="close"
                      size={22}
                      color="#3B82F7"
                      onPress={handleCloseUpdateExerciseForm}
                    />
                  </View>
                  <Text style={styles.fontTitle}>Seleziona esercizio</Text>
                  <View style={styles.flex}>
                    <AntDesign
                      style={styles.iconPlus}
                      name="plus"
                      size={22}
                      color="#3B82F7"
                      onPress={handleNewExerciseForm}
                    />
                  </View>
                </View>
                <SearchInput />
              </View>
              <FlatList
                data={filteredExercises}
                style={styles.exercisePlan}
                renderItem={({ item }) => (
                  <Exercise
                    data={item}
                    key={item.id}
                    updatePlanModal={updatePlanModal}
                    setUpdateExercisesForm={setUpdateExercisesForm}
                    setNewExerciseName={setNewExerciseName}
                    setSeriesRepsModal={setSeriesRepsModal}
                    setNewExerciseTarget={setNewExerciseTarget}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
      <AddSeriesReps
        updatePlanModal={updatePlanModal}
        setSeriesRepsModal={setSeriesRepsModal}
        seriesRepsModal={seriesRepsModal}
        newExerciseName={newExerciseName}
        handleUpdateSaveExercise={handleUpdateSaveExercise}
        setNewExerciseReps={setNewExerciseReps}
        setNewExerciseSeries={setNewExerciseSeries}
      />
      <AddNewExercise
        updatePlanModal={updatePlanModal}
        newExerciseModal={newExerciseModal}
        setNewExerciseModal={setNewExerciseModal}
        handleUpdateNewExercise={handleUpdateNewExercise}
        setNewExerciseName={setNewExerciseName}
        setNewExerciseTarget={setNewExerciseTarget}
        setNewExerciseSeries={setNewExerciseSeries}
        setNewExerciseReps={setNewExerciseReps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#1C1C1E",
    width: "90%",
    height: "80%",
    borderRadius: 10,
  },
  main: {
    padding: 16,
    flex: 1,
  },
  containerButton: {
    marginBottom: 15,
    flexDirection: "row",
  },
  closeBtn: {
    alignSelf: "flex-start",
  },
  flex: {
    flex: 1,
  },
  fontTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    flex: 2,
  },
  iconPlus: {
    alignSelf: "flex-end",
  },
  exercisePlan: {
    marginTop: 10,
  },
});