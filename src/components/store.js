import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import extraReducers from './productSlice';




const store = configureStore({
    reducer:{
        counter:counterSlice,
        product: extraReducers,

    },

})
export default store
