import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// we need to import Provider from "react-redux" and store from "Redux3/app/store.ts" in mainModule.tsx
// beacuse It makes this redux store available to my react  components inside here.
// Now all components can communicate with this redux store.