const { deployments, ethers, getNamedAccounts, network } = require("hardhat");
const { assert, expect } = require("chai");
const { developmentChains, networkConfig } = require('../../helper-hardhat-config');

!developmentChains.includes(network.name) ? describe.skip() :

describe("Raffle contract", function() {
  let deployer, player, raffle, vrfCoordinatorV2Mock;
  const chainId = network.config.chainId;

  beforeEach(async function() {
    // deploy
    deployer = (await getNamedAccounts()).deployer;
    player = (await getNamedAccounts()).player;
    await deployments.fixture(["all"]);
    // hardhat-deploy gets the most recent deployment of the FundMe contract
    raffle = await ethers.getContract("Raffle", deployer);
    vrfCoordinatorV2Mock = await ethers.getContract('VRFCoordinatorV2Mock', deployer);
  });

  describe("constructor", function() {
    it("initializes the raffle correctly", async function() {
      const raffleState = await raffle.getRaffleState();
      const interval = await raffle.getInterval();
      assert.equal(raffleState.toString(), "0");
      assert.equal(interval.toString(), networkConfig[chainId].interval);
    })
  });

  describe("enterRaffle", function() {

  });
});
