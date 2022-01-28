import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Player, BigPlayButton, ControlBar } from "video-react";
import "video-react/dist/video-react.css";

import scrollToComponent from "react-scroll-to-component";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Start = ({ contributeRef, info }) => {
  const { activateBrowserWallet, account, error } = useEthers();
  const etherBalance = useEtherBalance(account);

  let handleConnectWallet = () => {
    activateBrowserWallet();
  };

  useEffect(() => {
    if (error) {
      console.log(error.message);
    }
  }, [error]);

  return (
    <div>
      <div className="container">
        <div className="containerMiddle">
          <div className="header1">
            #ICO Landing page for your cryptocurrency project
          </div>
          <div className="flex">
            <div className="textArea">
              <div>
                Decentralized Demo Platform for ICO Developers, Advisors,
                Crypto-Experts and Investors.
              </div>
              <div className="buttonContainer">
                <div>
                  {!account && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleConnectWallet}
                    >
                      CONNET WALLET
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="movieContainer">
              <Player
                poster=""
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
                <BigPlayButton position="center" />
                <ControlBar autoHide={false} disableCompletely={true} />
              </Player>
            </div>
          </div>

          <div className="tokenSaleContainer flex">
            <div className="tokenSaleLeftSide">
              <div className="flex space-between">
                <div className="tokensSold">
                  Tokens Sold: <b>{info.totalToken}</b>
                </div>
                <div className="contributors">
                  Contributers: <b>{info.contributerCount}</b>
                </div>
              </div>
              <div className="totalSuppy">
                {info.myBalance} <b>DC</b>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    scrollToComponent(contributeRef, {
                      offset: -70,
                      align: "top",
                      duration: 1500,
                    })
                  }
                >
                  BUY TOKENS | 25% Bonus
                </Button>
              </div>
            </div>

            <div className="tokenSaleRightSide">
              <div className="titleTokenSale">TOKEN SALE IS LIVE</div>
              <div className="tokenSaleEnds"> TOKEN SALE ENDs IN </div>
              <div className="time flex space-around">
                <div>
                  <div className="headerTime">23</div>
                  <div>Days</div>
                </div>
                <div>
                  <div className="headerTime">12</div>
                  <div>Hours</div>
                </div>
                <div>
                  <div className="headerTime">49</div>
                  <div>Min</div>
                </div>
                <div>
                  <div className="headerTime">2</div>
                  <div>Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Icons space-around flex">
        <i className="fab fa-bitcoin"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-telegram-plane"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-reddit-alien"></i>
      </div>
    </div>
  );
};

export default Start;
