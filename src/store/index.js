import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const initialState = {}
const middleware = [ thunk ]
const globalWindow = typeof window !== "undefined" && window

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        globalWindow && globalWindow.__REDUX_DEVTOOLS_EXTENSION__ && globalWindow.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.subscribe(() => {
    localStorage.setItem("mySongs", JSON.stringify(store.getState()))
})

export default store;