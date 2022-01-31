import React from "react";
import styled from "styled-components";

const Card = ({ name, trans, delay, margin, src }) => (
  <div className={`cards ${margin}`} data-aos={trans} data-aos-delay={delay}>
    <img className="card-img-top" src={src} alt="Card image cap"></img>
    <div className="card-body">
      <p className="card-text">{name}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <Teams id="team">
      <h1 data-aos="fade-top">Grandmasters</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias non
        explicabo doloribus rerum! Hic optio qui laborum veniam in suscipit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
        suscipit.
      </p>
      <Cards>
        <Card
          name="Developer"
          src="/images/pic.jpg"
          trans="zoom-in-up"
          delay="50"
        />
        <Card
          name="Artist"
          src="/images/pic.jpg"
          trans="zoom-in-up"
          delay="500"
          margin="margin"
        />
        <Card
          name="Founder"
          src="/images/pic.jpg"
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
    margin: 1rem auto 3rem;
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
    p{
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
