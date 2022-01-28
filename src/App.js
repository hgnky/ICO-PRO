import React, { useEffect, useState } from "react";
import "./css/App.css";
import Button from "@material-ui/core/Button";
import Start from "./components/Start";
import About from "./components/About";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import Contribute from "./components/Contribute";
import Team from "./components/Team";
import scrollToComponent from "react-scroll-to-component";
import { useEthers, useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther, formatUnits } from "@ethersproject/units";

import { useTotalSupply, useAllContributers } from "./hooks";
import { tokenAddress } from "./constants";

var aboutRef = null;
var whitepaperRef = null;
var roadmapRef = null;
var contributeRef = null;
var teamRef = null;

const App = () => {
  const [myAddress, setMyAddress] = useState("0x0");
  const [myEther, setMyEther] = useState("0");
  const [myBalance, setMyBalance] = useState("0");
  const [totalToken, setTotalToken] = useState("0");
  const [contributerCount, setContributerCount] = useState("0");
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const tokenBalance = useTokenBalance(tokenAddress, account);
  const totalSupply = useTotalSupply();
  const allContributers = useAllContributers();
  // const totalSupply = "";
  // const allContributers = "";

  useEffect(() => {
    if (account) setMyAddress(account);
  }, [account]);
  useEffect(() => {
    if (etherBalance) setMyEther(Number(formatEther(etherBalance)).toFixed(4));
  }, [etherBalance]);
  useEffect(() => {
    if (tokenBalance) setMyBalance(Number(formatUnits(tokenBalance, 18)));
  }, [tokenBalance]);
  useEffect(() => {
    // console.log(totalSupply);
    if (totalSupply) setTotalToken(Number(formatUnits(totalSupply[0], 18)));
  }, [totalSupply]);
  useEffect(() => {
    if (allContributers)
      setContributerCount(Number(formatUnits(allContributers[0], 0)));
  }, [allContributers]);

  return (
    <div>
      <nav>
        <a href="/" className="titleICO">
          <i className="material-icons">group_work</i>
          <div>DEMOICO</div>
        </a>

        <div className="middleNav">
          <a
            onClick={() =>
              scrollToComponent(aboutRef, {
                offset: -70,
                align: "top",
                duration: 1500,
              })
            }
          >
            <Button>About</Button>
          </a>
          <a
            onClick={() =>
              scrollToComponent(whitepaperRef, {
                offset: -70,
                align: "top",
                duration: 1500,
              })
            }
          >
            <Button>Whitepaper</Button>
          </a>
          <a
            onClick={() =>
              scrollToComponent(roadmapRef, {
                offset: -70,
                align: "top",
                duration: 1500,
              })
            }
          >
            <Button>Roadmap</Button>
          </a>
          <a
            onClick={() =>
              scrollToComponent(contributeRef, {
                offset: -70,
                align: "top",
                duration: 1500,
              })
            }
          >
            <Button>Contribute</Button>
          </a>
          <a
            onClick={() =>
              scrollToComponent(teamRef, {
                offset: -70,
                align: "top",
                duration: 1500,
              })
            }
          >
            <Button>Team</Button>
          </a>
        </div>

        <div className="rightNav">
          <i className="material-icons">account_box</i>

          <div className="myAccountBox">
            <div className="address"> Address: {myAddress}</div>
            <div className="eth">ETH: {myEther}</div>
            <div className="dctoken">My DC: {myBalance}</div>
          </div>
        </div>
      </nav>
      <div id="startDiv">
        <Start
          contributeRef={contributeRef}
          info={{
            myAddress,
            myBalance,
            myEther,
            totalToken,
            contributerCount,
          }}
        />
      </div>
      <div ref={(section) => (aboutRef = section)}>
        <About />
      </div>
      <div ref={(section) => (whitepaperRef = section)}>
        <Whitepaper />
      </div>
      <div ref={(section) => (roadmapRef = section)}>
        <Roadmap />
      </div>
      <div ref={(section) => (contributeRef = section)}>
        <Contribute />
      </div>
      <div ref={(section) => (teamRef = section)}>
        <Team />
      </div>
    </div>
  );
};

export default App;
