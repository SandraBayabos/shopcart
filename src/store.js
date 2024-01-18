import { createStore } from "react";
import { cartReducer } from "./reducers/cartReducer";

const store = createStore(cartReducer);

export default store;
