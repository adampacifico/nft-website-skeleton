import React, { useState } from "react";
import styled from "styled-components";

const Aboutus = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  //   const [toggle, setToggle] = useState(0);
  return (
    <Container id="aboutus">
      {/* <div className="img_container">
        <img src="/images/brand/tans.png"></img>
      </div> */}
      <Vismis>
        <div className="vismis">
          <div data-aos="zoom-out">
            <h4>Our Mission</h4>
            <p>
              Build a society that inspires leadership, friendship, and
              companionship.
            </p>
          </div>
          <div data-aos="zoom-out">
            <h4>Our Vision</h4>
            <p>
              Become a worldwide range society that unites different human
              races.
            </p>
          </div>
        </div>
      </Vismis>
      <span>FAQ</span>
      <Faqcontainer data-aos="zoom-in">
        <div className="fcontainer">
          <div className="title" onClick={() => setToggle(!toggle)}>
            What is Paro Paro G International?
          </div>
          {toggle ? (
            <div>
              Paro Paro G International will establish as a worldwide
              organization, different human races are welcome to join and
              collaborate to expand our legacy and networks. Being broad and
              organized will inspire every member to unite, care, share, and do
              all good deeds as part of the brotherhood. Each member has
              different capabilities and statuses in life; high individuals have
              a higher chance to be elected as officers to have more ability to
              help the others. Small individuals will be supported until they
              grow then can help others.
            </div>
          ) : (
            ""
          )}
          <div className="title" onClick={() => setToggle2(!toggle2)}>
            What is the Hierarchy of Paro Paro G International?
          </div>
          {toggle2 ? (
            <div>
              Founders - Creators of the Project <br />
              International President - Who leads the national presidents
              <br />
              National President - Who leads the members of the country
              <br />
              Officials - Selected to be part of the leadership of the National
              President
              <br />
            </div>
          ) : (
            ""
          )}
          <div className="title" onClick={() => setToggle3(!toggle3)}>
            What are the countries affiliated with Paro Paro G International?
          </div>
          {toggle3 ? (
            <div>
              Africa, Argentina, Brazil, Brunei, Canada, Chile, China, Denmark,
              Iceland, Indonesia, Israel, Italy, Japan, Korea, Malaysia, Mexico,
              Nigeria, Norway, Philippines, Portugal, Russia, Spain, Sweden,
              Taiwan, Texas, UAE, USA, Vietnam
            </div>
          ) : (
            ""
          )}
          <div className="title" onClick={() => setToggle4(!toggle4)}>
            How to be part of Paro Paro G International?
          </div>
          {toggle4 ? (
            <div>
              Join our socials, mint NFTs, be an active member, and enjoy. Visit
              us on Twitter, Discord, Kumospace, Facebook, and purchase NFTs on
              Opensea.
            </div>
          ) : (
            ""
          )}
          <div className="title" onClick={() => setToggle5(!toggle5)}>
            Why do I join Paro Paro G International?
          </div>
          {toggle5 ? (
            <div>
              Since all human races are welcome, you are also welcome to meet
              others, collaborate, and enjoy with them. Grow our networks and
              let us inspire with the values of leadership, friendship, and
              companionship.
            </div>
          ) : (
            ""
          )}
        </div>
      </Faqcontainer>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  /* font-weight: 100; */
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;
  background: url("images/bg1.png");
  background-size: contain;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20vh;
  span {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #b8712f;
  }
  /* .img_container {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100%;
    z-index: 1;
    img {
      width: 500px;
      min-width: 50%;
      opacity: 0.2;
    }
  } */
`;

const Vismis = styled.div`
  opacity: 1;
  z-index: 5;
  /* padding: 0 60px; */
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
  .vismis {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      align-items: ;
      width: 300px;
      /* max-width: 450px; */
      min-height: 100px;
      height: auto;
      h4 {
        color: #b8712f;
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        margin-bottom: 10px;
        @media (max-width: 426px) {
          font-size: 1.2rem;
        }
      }
      p {
        @media (max-width: 426px) {
          font-size: 0.8rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .vismis {
      width: 80%;
    }
  }
`;
const Faqcontainer = styled.div`
  width: 60%;
  /* max-width: 60%; */
  margin: 0 auto;
  z-index: 5;
  .fcontainer {
    div {
      /* width: inherit; */
      margin: 0 auto;
      padding: 15px 25px;
    }
  }
  .title {
    background: #b8712f;
    :hover {
      cursor: pointer;
      /* background: white; */
    }
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export default Aboutus;
