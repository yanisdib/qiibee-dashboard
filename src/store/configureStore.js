import { createEpicMiddleware } from 'redux-observable';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from './modules/root';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(epicMiddleware))
    );
    epicMiddleware.run(rootEpic);
    return store;
}
