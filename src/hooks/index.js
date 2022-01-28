import { Contract } from "@ethersproject/contracts";
import { Interface } from "@ethersproject/abi";
import { useContractCall, useContractFunction } from "@usedapp/core";
import contractABI from "../ether/abi/ICO.json";
import { tokenAddress } from "../constants";

const contract = new Contract(tokenAddress, contractABI.abi);
const abiInterface = new Interface(contractABI.abi);

export function useBuyTokens() {
  const { state, send } = useContractFunction(contract, "buyTokens", {
    transactionName: "Buy Tokens",
  });
  return { state, send };
}

export function useTotalSupply() {
  const totalSupply = useContractCall({
    abi: abiInterface,
    address: tokenAddress,
    method: "totalSupply",
    args: [],
  });

  return totalSupply;
}

export function useAllContributers() {
  const allContributers = useContractCall({
    abi: abiInterface,
    address: tokenAddress,
    method: "allContributers",
    args: [],
  });

  return allContributers;
}
