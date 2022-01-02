import { createContext, useReducer, useContext } from 'react';

export const generateContext = (
  name,
  initialState,
  reducer
) => {
  const providerName = `${name}Provider`;
  const stateHookName = `use${name}State`;
  const dispatchHookName = `use${name}Dispatch`;

  const StateContext = createContext(initialState);
  StateContext.displayName = `${name}StateContext`;

  const DispatchContext = createContext(undefined);
  DispatchContext.displayName = `${name}DispatchContext`;

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <StateContext.Provider value={state}>
        {reducer && (
          <DispatchContext.Provider value={dispatch}>
            {children}
          </DispatchContext.Provider>
        )}
        {!reducer && children}
      </StateContext.Provider>
    );
  };
  Provider.displayName = `${name}ContextProvider`;

  const useStateContext = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
      throw new Error(`${stateHookName} must be used within a ${providerName}`);
    }
    return context;
  };

  let useDispatchContext;
  if (reducer) {
    useDispatchContext = () => {
      const context = useContext(DispatchContext);
      if (context === undefined) {
        throw new Error(
          `${dispatchHookName} must be used within a ${providerName}`
        );
      }
      return context;
    };
  }

  return { Provider, useStateContext, useDispatchContext };
};

export default generateContext;
