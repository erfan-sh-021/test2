export const ADD_TO_CART = '[product] ADD_TO_CART';

export function addTocart(product) {
    return {type:ADD_TO_CART , payload: product}
}