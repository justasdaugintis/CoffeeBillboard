import React from "react";
import { getStore } from "./store/appStore";
import { Provider } from "react-redux";
import Layout from "./layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'

const store = getStore();
const persistor = persistStore(store)

/**
 *  Main application file
 */
export default function App() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout/>
          </PersistGate>
        </Provider>
      );
}