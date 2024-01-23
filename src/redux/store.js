import { combineReducers, configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/lib/persistStore'
import storage from "redux-persist/lib/storage"
import categoriesReducer from './categories/CategoriesSlice'
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["categories", "cart"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    //Agregar middleware para que no se queje de que el estado no es serializable (por el persist)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)