import React from "react";
import styled from "styled-components";

const Roadmap = () => {
  const Step = ({ top, bot, num, title, content }) => (
    <Item>
      <Steps>
        <div className={`line ${top}`}></div>
        <div className="box">
          <span>{num}</span>
        </div>
        <div className={`line ${bot}`}></div>
      </Steps>
      <Content>
        <h1 className="title">{title}</h1>
        <div className="content">
          <span>{content}</span>
        </div>
      </Content>
    </Item>
  );

  const Elements = ({ title, content }) => (
    <div className="element">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
  return (
    <Roadmaps id="roadmap">
      <Main>
        <Left data-aos="flip-right">
          <div className="img_container">
            <img src="/images/brand/tans.png"></img>
          </div>
          <h2>Paru-paro G international roadmap</h2>
          <Step
            num="1"
            top="none"
            title="Presale and promos"
            content="We will be giving a bunch of dropdown price bonuses. stay tuned for more incoming promos."
          />
          <Step
            num="2"
            title="the hierarchy and networks"
            content="We will build an organized society that leads the unity of all human races. "
          />
          <Step
            num="3"
            title="project launch"
            content="We will be launching in different social media platforms and the web platform for minting. "
          />
          <Step
            num="4"
            title="Events and Conferences"
            content="Get in touch and connect to our socials, platforms and marketplace NFT holders will have a privilage to the events and conferences."
          />
          <Step
            num="5"
            bot="none"
            title="Monetization and Funding"
            content="They continuosly grew the communities, spread good deeds to others, and propagate populations with progressive outcomes. Giveaways and
            bonuses are waiting.  "
          />
        </Left>
        <Right  data-aos="flip-left">
          <div className="img_container">
            <img src="/images/brand/tans.png"></img>
          </div>
          <h2>NFT element guides</h2>
          <Elements
            title="Backgrounds"
            content="forest, iceberg, maroon, mint, nature, purple, snowy, sunset, sunspark"
          />
          <Elements
            title="Breeds"
            content="Africa, Argentina, Brazil, Brunei, Canada, Chile, China, Denmark, Iceland, Indonesia, Israel, Italy,
            Japan, Korea, Malaysia, Mexico, Nigeria, Norway, Philppines, Portugal, Russia, Spain, Sweden,
            Taiwan, Texas, UAE, USA, Vietnam"
          />
          <Elements
            title="Editions"
            content="cool, gold, hot, mint, purple, silver"
          />
          <Elements
            title="Established"
            content="2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
            2018,2019, 2020, 2021, 2022"
          />
          <Elements
            title="Souls"
            content="spirit"
          />
        </Right>
      </Main>
    </Roadmaps>
  );
};

const Roadmaps = styled.div`
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  /* height: 100vh; */
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #041c32; */
  background: url('images/bg.png');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0 50px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled.div`
  flex-basis: 50%;
  /* background: url('/images/1b.png');
  background-size: contain; */
  .img_container {
    img {
      width: 150px;
      height: 150px;
    }
  }
  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffc793;
    text-transform: uppercase;
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  /* background: url('/images/2c.png');
  background-size: contain; */
  .img_container {
    img {
      width: 150px;
      height: 150px;
    }
  }
  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 45px;
    color: #ffc793;
    text-transform: uppercase;
  }
  .element {
    text-align: left;
    /* margin-bottom: ; */
    width: 70%;
    margin: 0 auto 40px;
    h1 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 321px) {
    margin: 0;
    width: 100%;
  }
`;
const Content = styled.div`
  padding: 0 80px 0 50px;
  text-align: left;
  /* width: 50%; */
  h1 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }
  span {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    padding: 0 0 0 15px;
    width: 100%;
  }
  @media (max-width: 321px) {
    h1 {
      font-size: 1rem;
    }
  }
`;
const Steps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  .box {
    width: 60px;
    height: 60px;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: #b8712f;
      font-size: 1.7rem;
      font-weight: bold;
    }
  }
  .line {
    height: 30px;
    width: 1px;
    background: white;
  }
  .none {
    background: transparent;
  }

  @media (max-width: 426px) {
    .line {
      height: 45px;
    }
    height: 150px;
  }
`;
export default Roadmap;
