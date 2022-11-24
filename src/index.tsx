import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import { store } from "./store/store";
import { GlobalStyles } from "./ui";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </Provider>
);
