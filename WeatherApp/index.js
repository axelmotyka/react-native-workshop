/** @format */
import React from 'react'
import { AppRegistry } from 'react-native'
import AppContainer from './app/container/AppContainer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './app/reducers'
import { name as appName } from './app.json'

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = composeWithDevTools(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

let initialStoreState = {
    weatherForeCast : { 
        weather : [
            { description: "No weather data!" },
        ],
        name: "Unknown City"
    }
}

const store = configureStore(initialStoreState);
console.log(store.getState()); 

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent(appName, () => App);