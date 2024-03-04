import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

import { refresh } from "../redux/auth/operations";
// import { selectRefreshing } from "../redux/auth/selectors";

import Layout from "components/Layout";
// import Loader from "components/Loader";

const ShopPage = lazy(() => import("pages/Shop"));
const ShoppingCartPage = lazy(() => import("pages/ShoppingCart"));
const LoginPage = lazy(() => import("pages/Login"));
const RegisterPage = lazy(() => import("pages/Register"));
const HistoryPage = lazy(() => import("pages/History"));
const CouponsPage = lazy(() => import("pages/Coupons"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  // const isRefreshing = useSelector(selectIsRefreshing);
  // return isRefreshing ? (
  // const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route path="shopping-cart" element={<ShoppingCartPage />} />
        <Route
          path="auth/login"
          element={<RestrictedRoute redirectTo="auth" component={LoginPage} />}
        />
        <Route
          path="auth/register"
          element={
            <RestrictedRoute redirectTo="auth" component={RegisterPage} />
          }
        />

        <Route
          path="history"
          element={<PrivateRoute redirectTo="/login" component={HistoryPage} />}
        />
        <Route
          path="coupons"
          element={<PrivateRoute redirectTo="/login" component={CouponsPage} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
