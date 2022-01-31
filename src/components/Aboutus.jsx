import React, { useState } from "react";
import styled from "styled-components";

const Aboutus = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  //   const [toggle, setToggle] = useState(0);
  return (
    <Container id="aboutus">
      {/* <div className="img_container">
        <img src="/images/brand/tans.png"></img>
      </div> */}
      <Vismis>
        <div className="vismis">
          <div  data-aos="zoom-out">
            <h4>Our Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              maiores! Praesentium, voluptatum.
            </p>
          </div>
          <div  data-aos="zoom-out"> 
            <h4>Our Vision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iste
              cupiditate nesciunt.
            </p>
          </div>
        </div>
      </Vismis>
      <span>FAQ</span>
      <Faqcontainer  data-aos="zoom-in">
        <div className="fcontainer">
          <div className="title" onClick={() => setToggle(!toggle)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
            autem.
          </div>
          {toggle ? (
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              autem.
            </div>
          ) : (
            ""
          )}
          <div className="title" onClick={() => setToggle2(!toggle2)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
            autem.
          </div>
          {toggle2 ? (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit unde quos enim quod officia illo?
            </div>
          ) : (
            ""
          )}
          <div className="title" onClick={() => setToggle3(!toggle3)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
            autem.
          </div>
          {toggle3 ? (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              accusantium repellendus neque maiores corrupti laboriosam earum
              fugiat iste aspernatur, pariatur ipsum, nam sequi totam!
            </div>
          ) : (
            ""
          )}
          <div className="title" onClick={() => setToggle4(!toggle4)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
            autem.
          </div>
          {toggle4 ? (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et
              nesciunt, ea facilis mollitia quidem sunt! Nesciunt, ullam?
              Obcaecati corrupti itaque expedita, provident eum atque
              repudiandae. Assumenda quos inventore pariatur tenetur, suscipit
              officiis rem aliquam omnis autem deleniti facere?
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
  background: url('images/bg1.png');
  background-size: contain;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15vh;
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
      p{
        @media (max-width: 426px) {
          font-size: .8rem;
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
