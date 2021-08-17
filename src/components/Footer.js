import React from "react";
import styled from "styled-components";
import LogoImage from "../images/3d1191f8fb9d40a6be696b185512e83b.png";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const FooterSection = styled.footer`
  height: 60px;
  background: #000;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoFooter = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  img {
    width: 3rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-right: 10rem;
`;

const SocialMediaItem = styled(motion.div)`
  background: #ffb347;
  margin-right: 3rem;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterSection>
      <LogoFooter to="/">
        <img src={LogoImage} alt="Logo" />
        <p>CopyRight by D-Coding 2021</p>
      </LogoFooter>
      <SocialMedia>
        <SocialMediaItem
          to="/facebook"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaFacebookF />
        </SocialMediaItem>
        <SocialMediaItem
          to="/instagram"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaInstagram />
        </SocialMediaItem>
        <SocialMediaItem
          to="/youtube"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaYoutube />
        </SocialMediaItem>
      </SocialMedia>
    </FooterSection>
  );
};

export default Footer;
