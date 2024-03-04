import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectIsLoading,
  selectMedicines,
  selectError,
} from "../../redux/medicines/selectors";

import { getAllMedicines } from "../../redux/medicines/operation";

import ShopItem from "components/ShopItem";
import { Loading } from "notiflix/build/notiflix-loading-aio";

import * as s from "./ShopList.styled";

const ShopList = () => {
  const dispatch = useDispatch();

  const medicines = useSelector(selectMedicines);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllMedicines());
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchMedicines = async () => {
  //     await dispatch(getAllMedicines());
  //   };
  //   fetchMedicines();
  // }, [dispatch]);

  // const medicines = [
  //   {
  //     id: 1,
  //     name: "Medicine 1",
  //     description: "Description 1",
  //     made: "Made 1",
  //     type: "Type 1",
  //     price: "Price 1",
  //   },
  //   {
  //     id: 2,
  //     name: "Medicine 2",
  //     description: "Description 2",
  //     made: "Made 2",
  //     type: "Type 2",
  //     price: "Price 2",
  //   },
  //   {
  //     id: 3,
  //     name: "Medicine 3",
  //     description: "Description 3",
  //     made: "Made 3",
  //     type: "Type 3",
  //     price: "Price 3",
  //   },
  //   {
  //     id: 4,
  //     name: "Medicine 4",
  //     description: "Description 4",
  //     made: "Made 4",
  //     type: "Type 4",
  //     price: "Price 4",
  //   },
  //   {
  //     id: 5,
  //     name: "Medicine 5",
  //     description: "Description 5",
  //     made: "Made 5",
  //     type: "Type 5",
  //     price: "Price 5",
  //   },
  //   {
  //     id: 6,
  //     name: "Medicine 6",
  //     description: "Description 6",
  //     made: "Made 6",
  //     type: "Type 6",
  //     price: "Price 6",
  //   },
  //   {
  //     id: 7,
  //     name: "Medicine 7",
  //     description: "Description 7",
  //     made: "Made 7",
  //     type: "Type 7",
  //     price: "Price 7",
  //   },
  //   {
  //     id: 8,
  //     name: "Medicine 8",
  //     description: "Description 8",
  //     made: "Made 8",
  //     type: "Type 8",
  //     price: "Price 8",
  //   },
  //   {
  //     id: 9,
  //     name: "Medicine 9",
  //     description: "Description 9",
  //     made: "Made 9",
  //     type: "Type 9",
  //     price: "Price 9",
  //   },
  //   {
  //     id: 10,
  //     name: "Medicine 10",
  //     description: "Description 10",
  //     made: "Made 10",
  //     type: "Type 10",
  //     price: "Price 10",
  //   },
  // ];

  return (
    <>
      {isLoading && !error ? (
        <>{Loading.circle()}</>
      ) : (
        <>
          <s.Container>
            {Loading.remove()}
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
