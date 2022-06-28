import React from "react";
import { FaGithub, FaFolder, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElemtents";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Victor Oloyede</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Folder"
                rel="noopener noreferrer"
              >
                <FaFolder />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/DexterMcgee"
                target="_blank"
                aria-label="Github"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:victorzemail@gmail.com"
                target="_blank"
                aria-label="OutlineMail"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </SocialIconLink>
              <SocialIconLink
                href="tel:469-734-1247"
                target="_blank"
                aria-label="Phone"
                rel="noopener noreferrer"
              >
                <FaPhone />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
