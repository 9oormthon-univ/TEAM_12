import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store/index";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <React.StrictMode>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </React.StrictMode>
    </Provider>
  </>
);
