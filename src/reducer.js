import { CLEAR_CART, DECREASE, INCREASE, REMOVE_ITEM } from "./action";

const reducer = (state, action) => {
  if (action.type == CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type == REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type == INCREASE) {
  }
  if (action.type == DECREASE) {
  }
  if (action.type == LOADING) {
  }
  if (action.type == DISPLAY_ITEMS) {
  }

  throw new Error(`Il n'y a pas de d'action conrespondant a ${action.type}`);
};

export default reducer;
