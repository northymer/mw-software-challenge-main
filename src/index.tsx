import React from "react";
import { HomePage } from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { LoginPage } from './pages/Login/index';
import RequireAuth from "./components/RequireLogin";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
  <HashRouter>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <HomePage/>
          </RequireAuth>
        } />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
