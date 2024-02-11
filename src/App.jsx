/* eslint-disable react/no-unescaped-entities */

import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import "./style.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
