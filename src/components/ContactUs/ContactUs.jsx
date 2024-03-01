import * as s from "./ContactUs.styled";

const ContactUs = () => {
  return (
    <s.Container>
      <s.Link href="tel:+13025432012">+1 302 543 20 12</s.Link>
      <s.Link href="mailto:info@eliftech.com">info@eliftech.com</s.Link>
      <s.LinkToWebSite href="https://www.eliftech.com">
        www.eliftech.com
      </s.LinkToWebSite>
    </s.Container>
  );
};

export default ContactUs;
