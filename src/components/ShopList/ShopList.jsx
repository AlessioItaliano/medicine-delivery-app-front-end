import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectIsLoading,
  selectMedicines,
  selectError,
} from "../../redux/medicines/selectors";

import { getAllMedicines } from "../../redux/medicines/operation";

import ShopItem from "components/ShopItem";
import Loader from "components/Loader";

import * as s from "./ShopList.styled";

const ShopList = () => {
  const dispatch = useDispatch();

  const medicines = useSelector(selectMedicines);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllMedicines());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <>
          <s.Container>
            <s.List>
              {medicines.map((medicine) => (
                <div key={medicine._id}>
                  <ShopItem medicine={medicine} />
                </div>
              ))}
            </s.List>
          </s.Container>
        </>
      )}
    </>
  );
};

export default ShopList;
