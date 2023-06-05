// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Contract {
  
  address public owner;
  address payable[] public players;
  uint256 public balance = address(this).balance;
  uint256 public commission;
  uint256 index;
  uint256 randomNumber = block.prevrandao;

  constructor() {
    owner = msg.sender;
  }

  function deposit() public payable{
    require(msg.value > .01 ether);
    players.push(payable(msg.sender));
  }

  function random() public {
    require(owner == msg.sender);
    index = randomNumber % players.length;
  }

  function winner() public {
    commission = balance * 150 / 10000;
    balance -= commission;
    players[index].transfer(balance);
    players = new address payable[](0);
  }

  function getPlayers() public view returns (address payable[] memory) {
    return players;
  }

}