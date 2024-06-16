import React, { createContext, useState } from 'react';

export const RoutineContext = createContext();

export const RoutineProvider = ({ children }) => {
  const [routines, setRoutines] = useState([]);

  const addRoutine = (routine) => {
    setRoutines((prevRoutines) => [...prevRoutines, routine]);
  };

  return (
    <RoutineContext.Provider value={{ routines, addRoutine }}>
      {children}
    </RoutineContext.Provider>
  );
};