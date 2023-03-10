const { ethers } = require("hardhat");

const networkConfig = {
  5: {
    name: 'Goerli',
    vrfCordinatorV2: '0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D',
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    subscriptionId: "8323",
    callbackGasLimit: "500000",
    interval: "30"
  },
  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", // whatever
    callbackGasLimit: "500000",
    interval: "30"
  }
};

const developmentChains = ['hardhat', 'localhost'];

const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;

module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER
}
