import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebookF, FaDiscord } from "react-icons/fa";

const Joinus = () => {
  return (
    <MainDiv id="joinus">
      <img src="/images/brand/tans.png"></img>
      <h1>Follow Us</h1>
      <Links>
        <Border data-aos="fade-left">
          <FaTwitter />
        </Border>
        <Border data-aos="zoom-in">
          <FaFacebookF />
        </Border>
        <Border data-aos="fade-right">
          <FaDiscord />
        </Border>
      </Links>
      <Footer>Copyright © Paru Paru G 2022</Footer>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  height: 100vh;
  padding-top: 15px;
  width: 100vw;
  position: relative;
  background: #041c32;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h1 {
    color: tomato;
    font-size: 4rem;
    font-style: italic;
    text-align: center;
  }
  img {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 426px) {
    img {
      width: 150px;
      height: 150px;
    }
    padding-top: 55px;
  }
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 150px;
  background: #064663;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
`;
const Links = styled.div`
  color: white;
  margin-top: 5%;
  width: 50%;
  display: flex;
  justify-content: space-around;
`;
const Border = styled.a`
  text-decoration: none;
  font-size: 4rem;
  border: 1px white solid;
  border-radius: 50%;
  padding: 15px;

  :hover {
    cursor: pointer;
    transform: scale(1.2) !important;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 426px) {
    font-size: 1.5rem;
  }
`;
export default Joinus;
