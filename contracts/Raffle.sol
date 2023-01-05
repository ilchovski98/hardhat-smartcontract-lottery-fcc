// Raffle

// Enter the lottery (pay amount)
// Pick a random winner
// Winner to be selected every X time
// Chainlink Oracle -> Randomness, Automated Execution

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Raffle {
  error Raffle__NotEnoughETHEntered();

  uint256 private immutable i_entranceFee;
  address payable[] private s_players;

  /* Events */
  event RaffleEnter(address indexed player);

  constructor(uint256 entranceFee) {
    i_entranceFee = entranceFee;
  }

  function enterRaffle() public payable {
    if (i_entranceFee > msg.value) {
      revert Raffle__NotEnoughETHEntered(); 
    }

    s_players.push(payable(msg.sender));
    emit (msg.sender);
  }

  function getEntranceFee() public view returns(uint256) {
    return i_entranceFee;
  }

  function getPlayer(uint256 index) public view returns(address) {
    return s_players[index];
  }

  // function pickRandomWinner() {}
}
