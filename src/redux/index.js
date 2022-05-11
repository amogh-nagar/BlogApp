import blogreducer from './blogs'
import authreducer from './auth'
import { configureStore } from '@reduxjs/toolkit'
const store=configureStore({
    reducer:{
        auth:authreducer,
        blogs:blogreducer,
    }
})


export default store;