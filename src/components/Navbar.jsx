import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  // const Sidenav = () => <div>

  // </div>;
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    prevArrow: false,
    nextArrow: false,
    lazyLoaded: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <Main>
      <Navi>
        <Logo data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img src="/images/brand/tans.png"></img>
        </Logo >
        <NavList className={`${isClick ? "show" : "none"}`} data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
          {/* <Nav>HOME</Nav> */}
          <Nav onClick={() => setIsClick(false)} href="#mints">
            MINT
          </Nav>
          <Nav onClick={() => setIsClick(false)} href="#roadmap">
            ROADMAP
          </Nav>
          <Nav onClick={() => setIsClick(false)} href="#team">
            TEAM
          </Nav>
          <Nav onClick={() => setIsClick(false)} href="#joinus">
            JOIN US
          </Nav>
        </NavList>
        <Menu>
          {!isClick ? (
            <GiHamburgerMenu onClick={() => setIsClick(!isClick)} />
          ) : (
            <IoCloseSharp onClick={() => setIsClick(!isClick)} />
          )}
        </Menu>
      </Navi>
      <Banner data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <h1>Welcome to our NFT Project!</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          necessitatibus!
        </h2>
      </Banner>
      <div style={{ overflow: "hidden" }} data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <Slider {...settings}>
          <img src="/images/3.png"></img>
          <img src="/images/6.png"></img>
          <img src="/images/3.png"></img>
          <img src="/images/18.png"></img>
          <img src="/images/48.png"></img>
          <img src="/images/50.png"></img>
          <img src="/images/64.png"></img>
          <img src="/images/69.png"></img>
          <img src="/images/91.png"></img>
          <img src="/images/104.png"></img>
          <img src="/images/174.png"></img>
          <img src="/images/182.png"></img>
          <img src="/images/203.png"></img>
          <img src="/images/230.png"></img>
          <img src="/images/238.png"></img>
        </Slider>
      </div>
    </Main>
  );
};

const Main = styled.div`
  background: #041c32;
  color: white;
`;
const Menu = styled.div`
  color: white;
  font-size: 1.7rem;
  display: none;
  z-index: 5;

  @media (max-width: 425px) {
    display: block;
  }
`;
const Navi = styled.nav`
  width: 100%;
  height: 150px;
  padding: 20px;
  color: white;
  background: #064663;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 425px) {
    justify-content: space-between;
    padding-right: 50px;

    .none {
      display: none !important;
    }
    .show {
      display: flex;
      position: fixed;
      flex-direction: column;
      inset: 0;
      justify-content: space-evenly;
      background-color: rgba(1, 1, 1, 0.9);
      z-index: 2;
    }
    a{
      padding: 0;
    }
  }
`;
const Logo = styled.a`
  img {
    height: 150px;
    width: 150px;
  }
`;
const NavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    a {
      font-size: 2rem;
    }
  }
`;
const Nav = styled.a`
  padding-right: 30px;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  :hover {
    text-decoration: none;
    color: #ecb365;
    cursor: pointer;
  }
`;
const Banner = styled.div`
  height: calc(100vh - 410px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3.5rem;
    /* color: darkbrown; */
    margin-bottom: 10px;
  }
  h2 {
    font-size: 1.7rem;
  }
  @media (max-width: 820px) {
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 425px) {
    h2,h1 {
      text-align: center;
    }
  }
`;
export default Navbar;
