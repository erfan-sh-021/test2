import { ADD_TO_CART } from "./action";

export function cartReducer(state=[],action) {
    switch(action.type){
         case ADD_TO_CART:
            return [...state,action.paylad]
         default:
            return state;
    }
}