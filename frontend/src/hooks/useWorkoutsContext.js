import { WorkoutsContext } from "../context/WorkoutContext";
import React from "react";

export const useWorkoutsContext = () => {
  const context = React.useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }
  return context;
};
