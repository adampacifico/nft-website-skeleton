import React from "react";
import styled from "styled-components";

const Card = ({ name, trans, delay, margin, src,pos }) => (
  <div className={`cards ${margin}`} data-aos={trans} data-aos-delay={delay}>
    <img className="card-img-top" src={src} alt="Card image cap"></img>
    <div className="card-body">
      <h2 style={{ fontSize: "1.2rem", fontStyle: "italic"}}>{name}</h2>
      <p className="card-text">{pos}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <Teams id="team">
      <h1 data-aos="fade-top">Grandmasters</h1>
      <p>
        These are the people behind this amazing project. <br />
        <br />
        <span style={{ fontSize: "1.7rem" }}>🚀FLY HIGH BUTTERFLY!🦋</span>
      </p>
      <Cards>
        <Card
          name="AdamWalker"
          pos="Developer"
          src="/images/pic2.jpg"
          trans="zoom-in-up"
          delay="50"
        />
        <Card
          name="MarkMello"
          pos="Founder"
          src="/images/pic.jpg"
          trans="zoom-in-up"
          delay="500"
          margin="margin"
        />
        <Card
          name="KingBon"
          pos="Consultant"
          src="/images/pic3.jpg"
          trans="zoom-in-up"
          delay="1000"
        />
      </Cards>
    </Teams>
  );
};

const Teams = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  width: 100vw;
  background: url("images/bg1.png");
  background-size: contain;
  background-position: center;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    object-fit: fill;
  }
  p {
    margin-bottom: 30px;
    padding: 10px;
    width: 70%;
    margin: 0.5rem auto 3rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: bolder;
    color: #ffc793;
    text-transform: uppercase;
  }
  @media (max-width: 426px) {
    height: 100%;
    padding: 30px 0;
    p {
      width: 90%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  .card-img-top {
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
  .margin {
    margin: 0 70px;
  }
  @media (max-width: 426px) {
    flex-direction: column;
  }
`;
export default Team;
