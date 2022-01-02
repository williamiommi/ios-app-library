import generateContext from "../utils";
import state from "./state";
import AppReducer from "./reducer";

const {
  Provider: AppProvider,
  useStateContext: useAppStateContext,
  useDispatchContext: useAppDispatchContext,
} = generateContext("App", state, AppReducer);

export { AppProvider, useAppStateContext, useAppDispatchContext };
