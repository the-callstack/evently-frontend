import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";


// item payload shape
// [{
//     item: {
//         name: "chair",
//         price: 20,
//         id: 1,
//         type: 'rental'
//     },
//     quantity: 10
// }, {
//     item: {
//         name: "table",
//         price: 30,
//         id: 2,
//         type: 'sale'
//     },
//     quantity: 20
// }],


// const initialState = {
//     items: [{
//         item: {
//             name: "chair",
//             price: 20,
//             id: 1,
//             type: 'rental'
//         },
//         quantity: 10
//     }, {
//         item: {
//             name: "table",
//             price: 30,
//             id: 2,
//             type: 'sale'
//         },
//         quantity: 20
//     }],
//     totalPrice: 800,
//     order: {}
// };

const initialState = {
    items: [],
    totalPrice: 0,
    order: {}
};


export const makeOrder = createAsyncThunk('cart/makeOrder',
    async (data) => {
        const res = await axios.post('/details', data);
        console.log(res.data);
        return res.data;
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice += action.payload.item.price * action.payload.quantity;
        },
        removeFromCart: (state, action) => {
            const stateItems = state.items.filter(item => item.item.id !== action.payload);
            state.items = stateItems;
            console.log(stateItems);
            state.totalPrice = stateItems?.reduce((acc,item)=>{
                acc += item.quantity * item.item.price
                return acc;
            },0) ;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(makeOrder.fulfilled, (state, action) => {
                state.order = action.payload;
            });
    }
});

export const selectCartState = (state) => state.cart;
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;