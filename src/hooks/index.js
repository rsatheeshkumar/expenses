import { useState } from "react";

export const useMultiState = (initialState = {}) => {
  const [state, updateState] = useState(() => initialState);

  const setState = (newValue) => {
    const value = newValue;
    if (typeof newValue === "function") {
      value = newValue(state);
    }
    updateState({ ...state, ...value });
  };

  return [state, setState];
};
