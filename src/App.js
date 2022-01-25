import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Joinus from "./components/Joinus";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";

import AOS from "aos";
import "aos/dist/aos.css";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  width: 150px;
  padding: 15px 0;
  margin: 20px 0;
  border-radius: 15px;
  border: none;
  background-color: #03c4a1;
  color: white;

  :hover {
    cursor: pointer;
    background-color: #007880;
  }
`;

export const StyledRoundButton = styled.button`
  width: 50px;
  padding: 8px 0;
  border-radius: 15px;
  border: none;
  background-color: #03c4a1;
  color: white;

  :hover {
    cursor: pointer;
    background-color: #007880;
  }
`;

export const ResponsiveWrapper = styled.div``;

export const StyledLogo = styled.img``;

export const StyledImg = styled.img``;

export const StyledLink = styled.a``;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 50) {
      newMintAmount = 50;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    AOS.init();
  }, [blockchain.account]);

  return (
    <>
      <Navbar />
      <s.Screen id="mints">
        <div data-aos="flip-right" className="left_image">
          <img src="/images/brand/logo.png"></img>
        </div>
        <s.Container
          data-aos="flip-left"
          flex={1}
          ai={"center"}
          image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
        >
          {/* <a href={CONFIG.MARKETPLACE_LINK}>
        LINK TO OPENSEA
        </a> */}
          <s.SpacerSmall />
          <ResponsiveWrapper
            flex={1}
            style={{ width: "100%", padding: 10 }}
            test
          >
            <s.Container flex={2} jc={"center"} ai={"center"}>
              <s.TextTitle
                style={{
                  fontSize: "5rem",
                  marginBottom: "30px",
                  color: "tomato",
                }}
              >
                {data.totalSupply} / {CONFIG.MAX_SUPPLY}
              </s.TextTitle>
              <s.TextDescription style={{ fontSize: "1.7rem" }}>
                <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                  {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                </StyledLink>
              </s.TextDescription>
              {/* <span>
                <StyledButton
                  onClick={(e) => {
                    window.open("/config/roadmap.pdf", "_blank");
                  }}
                >
                  Roadmap
                </StyledButton>
                <StyledButton
                  onClick={(e) => {
                    window.open(CONFIG.MARKETPLACE_LINK, "_blank");
                  }}
                >
                  {CONFIG.MARKETPLACE}
                </StyledButton>
              </span> */}
              <s.SpacerSmall />
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <s.TextTitle>The sale has ended.</s.TextTitle>
                  <s.TextDescription>
                    You can still find {CONFIG.NFT_NAME} on
                  </s.TextDescription>
                  <s.SpacerSmall />
                  <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </StyledLink>
                </>
              ) : (
                <>
                  <s.TextTitle>
                    1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}.
                  </s.TextTitle>
                  <s.SpacerXSmall />
                  <s.TextDescription>Excluding gas fees.</s.TextDescription>
                  <s.SpacerSmall />
                  {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                    <s.Container ai={"center"} jc={"center"}>
                      <s.TextDescription>
                        Connect to the {CONFIG.NETWORK.NAME} network
                      </s.TextDescription>
                      <s.SpacerSmall />
                      <StyledButton
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        CONNECT
                      </StyledButton>
                      {blockchain.errorMsg !== "" ? (
                        <>
                          <s.SpacerSmall />
                          <s.TextDescription>
                            {blockchain.errorMsg}
                          </s.TextDescription>
                        </>
                      ) : null}
                    </s.Container>
                  ) : (
                    <>
                      <s.TextDescription>{feedback}</s.TextDescription>
                      <s.SpacerMedium />
                      <s.Container
                        style={{
                          display: "flex",
                          width: "70%",
                          justifyContent: "space-around",
                          flexDirection: "row",
                        }}
                        ai={"center"}
                        jc={"center"}
                        fd={"row"}
                      >
                        <StyledRoundButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </StyledRoundButton>
                        <s.SpacerMedium />
                        <s.TextDescription>{mintAmount}</s.TextDescription>
                        <s.SpacerMedium />
                        <StyledRoundButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </StyledRoundButton>
                      </s.Container>
                      <s.SpacerSmall />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <StyledButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "BUSY" : "BUY"}
                        </StyledButton>
                      </s.Container>
                    </>
                  )}
                </>
              )}
              <s.SpacerMedium />
            </s.Container>
            <s.SpacerLarge />
          </ResponsiveWrapper>
          <s.SpacerMedium />
          <s.Container
            jc={"center"}
            ai={"center"}
            style={{ padding: "0 15px 30px 0" }}
          >
            <s.TextDescription style={{ textAlign: "center" }}>
              Please make sure you are connected to the right network (
              {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please
              note: Once you make the purchase, you cannot undo this action.
            </s.TextDescription>
            <s.SpacerSmall />
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "black",
                marginTop: "10px",
              }}
            >
              We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract
              to successfully mint your NFT. We recommend that you don't lower
              the gas limit.
            </s.TextDescription>
          </s.Container>
        </s.Container>
      </s.Screen>
      <Roadmap />
      <Team id="team" />
      <Joinus id="joinus" />
    </>
  );
}

export default App;
