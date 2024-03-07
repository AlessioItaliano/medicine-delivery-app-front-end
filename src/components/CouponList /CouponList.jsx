import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCoupons,
  selectIsLoading,
  selectError,
} from "../../redux/coupons/selectors";
import { getCoupons } from "../../redux/coupons/operation";

import CouponItem from "components/CouponItem ";

import * as s from "./CouponList.styled";

const CouponList = () => {
  const dispatch = useDispatch();

  const coupons = useSelector(selectCoupons);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCoupons());
  }, [dispatch]);

  return (
    <s.Container>
      {isLoading && !error ? (
        <s.EmptyContainer>
          <s.EmptyWarning>You don't have any discount.</s.EmptyWarning>
        </s.EmptyContainer>
      ) : (
        <s.List>
          {coupons.map((coupon) => (
            <s.Item key={coupon._id}>
              <CouponItem coupon={coupon} />
            </s.Item>
          ))}
        </s.List>
      )}
    </s.Container>
  );
};

export default CouponList;
