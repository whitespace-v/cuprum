    import {createSlice, PayloadAction} from "@reduxjs/toolkit";
    import {IItem, ICartItem} from "../../models/DataBaseItems";
    import {isItemInCart} from "../../hof/isItemInCart";

    interface CartState {
        cartItems: ICartItem[];
    }

    const initialState: CartState = {
        cartItems: [],
    }

    export const cartSlice = createSlice({
            name: 'cart',
            initialState,
            reducers: {
                deleteFromCart(state, action: PayloadAction<IItem>){
                    state.cartItems = state.cartItems.filter(x => x.item.id !== action.payload.id)
                },
                cartItemCountControl(state, action: PayloadAction<ICartItem>){
                    let idx = state.cartItems.findIndex(x => x.item.id === action.payload.item.id)
                    if (state.cartItems[idx].count > 1){
                        state.cartItems[idx].count += action.payload.count
                    } else if (state.cartItems[idx].count === 1 && action.payload.count === 1){
                        state.cartItems[idx].count += action.payload.count
                    } else {
                        state.cartItems = state.cartItems.filter(x => x.item.id !== action.payload.item.id)
                    }
                },
                addToCart(state, action: PayloadAction<IItem>){
                    if (!isItemInCart(action.payload, state.cartItems)) {
                        state.cartItems = [...state.cartItems, {item: action.payload, count: 1}]
                    }
                }
            }
        }
    )

    export default cartSlice.reducer