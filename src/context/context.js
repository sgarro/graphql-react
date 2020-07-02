import React, { useReducer, createContext } from "react";
import { UserReducer, userInitialState } from "./reducers/user";



const Store = createContext({user: userInitialState});
const { Provider } = Store;
const StoreProvider = ({children}) => {
  console.log("storeProvider")
  let localUser = JSON.parse(localStorage.getItem('user'))
  const userLocal = (localUser !== null)? localUser : null
  const isAuthenticated = (localUser !== null)? true : false
  const initialState = {
    user: userLocal,
    isAuthenticated
  }
  const [user, userDispatch] = useReducer(UserReducer, initialState);

  const state = {
   user
  }
  const dispatch = {
    userDispatch
  }

  return (
    <Provider value={{ state, dispatch }}>{children}</Provider>
  );
};

export {Store, StoreProvider}