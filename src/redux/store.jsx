import { createStore } from "redux";
import { cartReducer } from "./reducer";
const cartStore = createStore(cartReducer)
export default cartStore