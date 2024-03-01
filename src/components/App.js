import { lazy } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

// import { refreshUser } from "../redux/auth/operations";
// import { selectRefreshing } from "../redux/auth/selectors";

import Layout from "components/Layout";
// import Loader from "components/Loader";

const ShopPage = lazy(() => import("pages/Shop"));
const ShoppingCartPage = lazy(() => import("pages/ShoppingCart"));

const App = () => {
  // const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route path="/" element={<ShoppingCartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
  // isRefreshing ? (
  //   <Loader />
  // ) : (

  // );
};

export default App;
