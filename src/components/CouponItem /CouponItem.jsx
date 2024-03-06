import { useState } from "react";
import Button from "components/Button/Button";
import * as s from "./CouponItem.styled";

const CouponItem = ({ coupon }) => {
  const { urlToImage, description, _id } = coupon;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(_id);
    setCopied(true);
  };

  return (
    <s.Container>
      <s.ImageContainer>
        <s.Image src={urlToImage} alt="coupon_img" />
      </s.ImageContainer>
      <s.DescriptionContainer>
        <s.Description>{description}</s.Description>
        <Button
          name={copied ? "Copied!" : "Get your discount"}
          type="button"
          func={handleCopy}
          disabled={copied}
        />
      </s.DescriptionContainer>
    </s.Container>
  );
};

export default CouponItem;