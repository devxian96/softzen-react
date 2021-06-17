import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Note: this API requires redux@>=3.1.0
export default createStore(applyMiddleware(thunk));
