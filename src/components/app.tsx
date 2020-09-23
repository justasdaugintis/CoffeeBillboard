import * as React from "react";
import { getStore } from "../store/appStore";
import { Provider } from "react-redux";
import Layout from "./layout/layout";
import { CoffeeBlockLogic } from "./coffeeBlock/logic";

const store = getStore();

export default function IApp() {
    return (
        <Provider store={store}>
          <Layout/>
        </Provider>
      );
}