import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./note/noteSlice";

const store = configureStore({
    reducer: {
        note: noteReducer,
    },
});

export default store;

//définir le type RootState pour utilise les selectors
export type RootState = ReturnType<typeof store.getState>;

//définir le type AppDispatch pour utiliser les actions
export type AppDispatch = typeof store.dispatch;