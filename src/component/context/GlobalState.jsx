import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer.jsx';
const initialState = {};



export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState);

    function getAllEvents() {
        dispatch({
          type: "GET_ALL_EMPLOYEE",
        });
    }

    function addEmployee(employee) {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: employee
      });
    }
  
    function editEmployee(employee) {
      dispatch({
        type: "EDIT_EMPLOYEE",
        payload: employee
      });
    }
  
    function removeEmployee(id) {
      dispatch({
        type: "REMOVE_EMPLOYEE",
        payload: id
      });
    }
  
    return (
      <GlobalContext.Provider
        value={{
          events: state,
          addEmployee,
          editEmployee,
          removeEmployee,
          getAllEvents
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };