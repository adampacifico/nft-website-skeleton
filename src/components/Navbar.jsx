import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <Navi>
        <Logo>YOUR LOGO HERE!</Logo>
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
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus!</h2>
      </Banner>
    </>
  );
};

const Navi = styled.nav`
  width: 100%;
  height: 100px;
  padding: 20px;
  color: white;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.a`
  font-size: 3rem;
`;
const NavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.a`
  padding-right: 30px;
  text-decoration: none;
  color: white; 
  :hover {
    color: red;
    cursor: pointer;
  }
`;
const Banner = styled.div`
  height: calc(100vh - 100px);
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;   
  h1{
      font-size: 5rem;
      color: darkbrown;
      margin-bottom: 10px;
  }
  h2{
      font-size: 2rem;
  }
`;
export default Navbar;
