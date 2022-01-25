import React from "react";
import styled from "styled-components";

const Roadmap = () => {
  return (
    <Roadmaps id="roadmap">
      <VisMis>
        <Vision data-aos="flip-left">
          <h2>Vision</h2>
          <div>
            <img src="/images/238.png" style={{ marginRight: "20px" }}></img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto temporibus culpa praesentium velit dignissimos
              doloremque.
            </p>
          </div>
        </Vision>

        <Mission data-aos="flip-right">
          <h2>Mission</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto temporibus culpa praesentium velit dignissimos
              doloremque.
            </p>
            <img src="/images/242.png" style={{ marginLeft: "20px" }}></img>
          </div>
        </Mission>
      </VisMis>
      <Map>
        {/* <h1>ROADMAP</h1>
        <img src="/images/1.png"></img> */}
        <h1>image of Roadmap</h1>
      </Map>
    </Roadmaps>
  );
};

const Roadmaps = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #041c32;
  color: white;
  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const VisMis = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h2 {
    font-size: 2.5rem;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  p {
    font-size: 1.2rem;
    width: 80%;
  }
  @media (max-width: 425px) {
    img {
      width: 75px;
      height: 75px;
      margin: 0 !important;
    }
    p {
      font-size: 0.7rem;
      width: 70%;
      text-align: center;
    }
    div {
      justify-content: center;
    }
  }
`;

const Vision = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Mission = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Map = styled.div`
  flex-basis: 50%;
  border: 1px solid white;
  height: 100%;
  width: 100%;
  vertical-align: center;
  img {
    height: 725px;
    width: 725px;
  }
`;
export default Roadmap;
