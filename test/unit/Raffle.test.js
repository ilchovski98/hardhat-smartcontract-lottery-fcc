const { assert, expect } = require("chai");
const { deployments, ethers, getNamedAccounts } = require("hardhat");

describe("Raffle contract", function() {
  let deployer, player, raffle, vrfCoordinatorV2Mock;

  beforeEach(async function() {
    // deploy
    deployer = (await getNamedAccounts()).deployer;
    player = (await getNamedAccounts()).player;
    await deployments.fixture(["all"]);
    // hardhat-deploy gets the most recent deployment of the FundMe contract
    raffle = await ethers.getContract("raffle", deployer);
    vrfCoordinatorV2Mock = await ethers.getContract('MockV3Aggregator', deployer);
  });

  describe("enterRaffle", function() {
    it("enterenceFee", async function() {
      const entranceFee = (await raffle.getEntranceFee());
      await expect(raffle.enterRaffle({ value: entranceFee.div(2) })).to.be.revertedWithCustomError(raffle, "Raffle__SendMoreToEnterRaffle");
    })
  });
});
