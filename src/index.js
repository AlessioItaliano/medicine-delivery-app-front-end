import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import { persistor } from "./redux/store";
import App from "components/App";
import "./index.css";
// import { Loading } from "notiflix/build/notiflix-loading-aio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={Loading.circle()} persistor={persistor}> */}
    <BrowserRouter basename="/medicine-delivery-app-front-end">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
