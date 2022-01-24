import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Navbar = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    prevArrow: false,
    nextArrow: false,
    lazyLoaded: true,
  };
  return (
    <Main>
      <Navi>
        <Logo>
          <img src="/images/brand/tans.png"></img>
        </Logo>
        <NavList>
          <Nav>HOME</Nav>
          <Nav href="#mints">MINT</Nav>
          <Nav href="#roadmap">ROADMAP</Nav>
          <Nav href="#team">TEAM</Nav>
          <Nav href="#joinus">JOIN US</Nav>
        </NavList>
      </Navi>
      <Banner>
        <h1>Welcome to our NFT Project!</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          necessitatibus!
        </h2>
      </Banner>
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
    </Main>
  );
};

const Main = styled.div`
  background: #041c32;
  color: white;
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
`;
const Nav = styled.a`
  padding-right: 30px;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  :hover {
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
    font-size: 5rem;
    color: darkbrown;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 2rem;
  }
`;
export default Navbar;
