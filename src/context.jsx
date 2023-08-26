import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import { CLEAR_CART, REMOVE_ITEM } from "./action";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
