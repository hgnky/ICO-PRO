import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useBuyTokens } from "../hooks";

import { parseEther } from "@ethersproject/units";

const Contribute = () => {
  const [buyAmount, setBuyAmount] = useState(0);
  const { state, send } = useBuyTokens();

  const handleChange = (e) => {
    setBuyAmount(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    send({ value: parseEther("" + buyAmount) });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <div className="contribute">Contribute</div>
      <div className=" contributeContainer">
        <form>
          <div className="buyCoins">
            <div className="amountToBuy">Amount of ether to buy:</div>
            <TextField
              type="number"
              value={buyAmount}
              onChange={handleChange}
              inputProps={{
                style: { textAlign: "right" },
                min: 0,
              }}
            />
            <div> ≈ DC </div>
            <div className="etherDC"> (1 ETH ≈ 100 + 25 (Bonus) DC) </div>
          </div>
          <div className="buttonBuy">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Buy DC Tokens | 25% Bonus
            </Button>
          </div>
        </form>

        {state.status == "Exception" && (
          <div className="flex errorMessage">
            <i className="material-icons">error_outline</i>
            <div>Error Message: {state.errorMessage}</div>
          </div>
        )}

        {state.status == "Mining" && (
          <div className="flex loadingContainer">
            <div>
              <div className="loadingText"> Waiting For Confirmation</div>
              <div className="loadTextSub">
                (this can take up to 30 seconds)
              </div>
            </div>
            <CircularProgress />
          </div>
        )}

        {state.status == "Success" && (
          <div className="flex successfully">
            You successfully bought DC Coins!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contribute;
