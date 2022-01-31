import React from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebookF,
  FaDiscord,
  FaInstagramSquare,
  FaMediumM,
  FaPinterestP,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

const Joinus = () => {
  return (
    <MainDiv id="joinus">
      <h1>Follow Us</h1>
      <Links>
        <div data-aos="fade-left">
          <Border href="https://twitter.com/paroparog_nft" target="_blank">
            <FaTwitter />
          </Border>
          <Border href="https://www.facebook.com/paroparoginternational" target="_blank">
            <FaFacebookF />
          </Border>
          <Border href="https://discord.gg/KkWeBGgazB" target="_blank">
            <FaDiscord />
          </Border>
        </div>
        <div data-aos="zoom-in">
          <Border href="https://www.instagram.com/paroparog_nft/" target="_blank">
            <FaInstagramSquare />
          </Border>
          <Border href="https://medium.com/@paroparog_nft" target="_blank">
            <FaMediumM />
          </Border>
          <Border href="https://pin.it/139nL52" target="_blank">
            <FaPinterestP />
          </Border>
        </div>
        <div data-aos="fade-right">
          <Border href="https://opensea.io/collection/paroparog" target="_blank">
            <img src="/images/os2.png"></img>
          </Border>
          <Border href="https://t.me/paroparognft" target="_blank">
            <FaTelegramPlane />
          </Border>
          <Border href="https://www.tiktok.com/@paroparog_nft" target="_blank">
            <FaTiktok />
          </Border>
        </div>
      </Links>
      <Footer>Copyright © Paru-Paro G 2022</Footer>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  font-family: "Roboto", sans-serif;
  height: 70vh;
  padding-top: 15px;
  width: 100vw;
  position: relative;
  background: #041c32;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: url("images/foot.png");
  background-size: cover;
  background-position: center;
  h1 {
    color: #ffc793;
    font-size: 2rem;
    text-align: center;
    margin-top: 40px;
    font-weight: bolder;
    text-transform: uppercase;
    font-style: italic;
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
  color: #ffc793;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 150px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
const Links = styled.div`
  color: white;
  margin-top: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: auto;
  }
  @media (max-width: 769px) {
    flex-direction: column;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Border = styled.a`
  text-decoration: none;
  font-size: 2rem;
  border: 1px white solid;
  border-radius: 50%;
  padding: 17px 20px;
  margin: 10px;
  color: white;
  img{
    width: 2rem;
    height: 2rem;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.2) !important;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 426px) {
    font-size: 1.5rem;
  }
  
`;
export default Joinus;
