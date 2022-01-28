const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraURL =
  "https://rinkeby.infura.io/v3/1abf0d4874764b4aae4426c9ff3734f0";
let mnemonic = ""; // seed;
module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL), // Localhost (default: none)
      // port: 8545,            // Standard Ethereum port (default: none)
      network_id: "4", // Any network (default: none)
    },
  },

  contracts_directory: "./contracts/",
  contracts_build_directory: "./src/ether/abi/",

  compilers: {
    solc: {
      version: "^0.4.26",
      optimizer: {
        enabled: "true",
        runs: 200,
      },
    },
  },
};
