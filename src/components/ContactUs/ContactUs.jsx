import { ReactComponent as WatsappIcon } from "../../icons/watsapp.svg";
import { ReactComponent as YouTubeIcon } from "../../icons/youtube.svg";
import { ReactComponent as TelegramIcon } from "../../icons/telegram.svg";
import { ReactComponent as InstagramIcon } from "../../icons/Instagram.svg";
import { ReactComponent as FacebookIcon } from "../../icons/facebook.svg";

import * as s from "./ContactUs.styled";

const ContactUs = () => {
  return (
    <s.Container>
      <s.AddressList>
        <s.AddressItem>
          <s.Link href="tel:+391112233444">+1 112 23 34 44</s.Link>
        </s.AddressItem>
        <s.AddressItem>
          <s.Link href="mailto:info@medservice.com">info@medservice.com</s.Link>
        </s.AddressItem>
        <s.AddressItem>
          <s.LinkToWebSite href="https://www.medservice.com">
            www.medservice.com
          </s.LinkToWebSite>
        </s.AddressItem>
      </s.AddressList>

      <s.SocialsList>
        <s.SocialsItem>
          <s.SocialsLink href="https://www.medservice.com">
            {" "}
            <FacebookIcon />
          </s.SocialsLink>
        </s.SocialsItem>
        <s.SocialsItem>
          <s.SocialsLink href="https://www.medservice.com">
            {" "}
            <InstagramIcon />
          </s.SocialsLink>
        </s.SocialsItem>
        <s.SocialsItem>
          <s.SocialsLink href="https://www.medservice.com">
            {" "}
            <TelegramIcon />
          </s.SocialsLink>
        </s.SocialsItem>
        <s.SocialsItem>
          <s.SocialsLink href="https://www.medservice.com">
            {" "}
            <YouTubeIcon />
          </s.SocialsLink>
        </s.SocialsItem>
        <s.SocialsItem>
          <s.SocialsLink href="https://www.medservice.com">
            {" "}
            <WatsappIcon />
          </s.SocialsLink>
        </s.SocialsItem>
      </s.SocialsList>
    </s.Container>
  );
};

export default ContactUs;
