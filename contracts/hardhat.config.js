/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/x632aQJgGnS6kYj5V8Jm1zghEnVZKzLU",
      accounts: [
        "8494736ec2bb9575f3a32ffa07abf809a48a4db27cad1d737209195bbd30b36d",
      ],
    },
  },
};
