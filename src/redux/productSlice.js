import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct: (state,action) => {
            const index = state.findIndex(product => product.productName === action.payload.productName);
            if(index >= 0){
                state[index] = action.payload;
            }
            else{
                state.push(action.payload);
            }
        },
        updateProduct: (state,action) => {
            const index = state.findIndex(product => product.id === action.payload);
            if(index !== -1){
                state[index] = {...state[index], ...action.payload};
            }
        },
        deleteProduct: (state,action) => {
            return state.filter(product => product.id !== action.payload);
        },
        updateProductInInvoices: (state,action) =>{
            return state.map(
                product => product.productName === action.payload.productName ? {...product,...action.payload} : product
            )
        }
    }
})

export const {addProduct, updateProduct, deleteProduct, updateProductInInvoices} = productSlice.actions;
export default productSlice.reducer;
