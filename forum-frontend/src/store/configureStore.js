import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";
import commentsReducer from "./reducers/commentsReducer";
import thunkMiddleware from "redux-thunk";
import {loadFromLocalStorage, saveToLocalStorage} from "./LocalStorage";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    post: postReducer,
    user: userReducer,
    comments: commentsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveToLocalStorage({
        user: {
            user: store.getState().user.user
        }

    })
});
export default store;