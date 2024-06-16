import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import { loadState, saveState } from "./LocalStorage";

const persistedState = loadState();


const store = configureStore({
    reducer: CartSlice,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // Disable serializable check for localStorage
        }),
    preloadedState: persistedState,
})

store.subscribe(() => {
  saveState(store.getState());
});

export default store