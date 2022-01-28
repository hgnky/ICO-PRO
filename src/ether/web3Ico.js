var Web3 = require("web3");
var Eth = require("web3-eth");
var web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  )
);

let selectedAccount;
const abi = require("./abi/ICO.json");
const parsedABI = JSON.parse(JSON.stringify(abi));
let addressContract = "0xfE7Cb5E2d79E8943037ee66FcF40F1110a875Aa7";
let a = 1;
let b = 2;

if (b >= a) {
  var web3 = new web3.eth.Contract([parsedABI], addressContract);
} else {
  console.log("Contrato no Desplegado en la Red");
}

export default web3;
