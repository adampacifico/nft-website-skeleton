import React from "react";
import styled from "styled-components";

const Card = ({ name, trans, delay }) => (
  <div className="card" style={{ width: "22rem" }} data-aos={trans} data-aos-delay={delay}>
    <img
      className="card-img-top"
      src="/images/3.png"
      alt="Card image cap"
    ></img>
    <div className="card-body">
      <p className="card-text">{name}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <Teams id="team">
      <h1>Team Members</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias non
        explicabo doloribus rerum! Hic optio qui laborum veniam in suscipit!
      </p>
      <Cards>
        <Card name="Developer" trans="zoom-in-up" delay="50" />
        <Card name="Artist" trans ="zoom-in-up"   delay="500"/>
        <Card name="Founder" trans="zoom-in-up"  delay="1000"/>
      </Cards>
    </Teams>
  );
};

const Teams = styled.div`
  height: 100vh;
  width: 100vw;
  background: #dbcbbd;
  color: black;
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

  }
  h1 {
    font-size: 3rem;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: 100%; */
`;
export default Team;
