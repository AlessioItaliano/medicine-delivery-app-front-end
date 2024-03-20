import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectOrdersHistory,
  selectIsLoading,
  selectError,
} from "../../redux/orderHistory/selectors";
import { getUserOrder } from "../../redux/orderHistory/operation";

import HistoryItem from "components/HistoryItem";

import * as s from "./HistoryList.styled";

const HistoryList = () => {
  const dispatch = useDispatch();

  const orders = useSelector(selectOrdersHistory);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  console.log(error);
  console.log(isLoading);
  console.log(orders);

  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);

  return (
    <s.Container>
      {orders.length === 0 || (isLoading && !error) ? (
        <s.EmptyContainer>
          <s.EmptyWarning>You don't have any history.</s.EmptyWarning>
        </s.EmptyContainer>
      ) : (
        <s.List>
          {orders.map((order) => (
            <s.Item key={order._id}>
              <HistoryItem order={order} />
            </s.Item>
          ))}
        </s.List>
      )}
    </s.Container>
  );
};

export default HistoryList;
