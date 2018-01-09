pragma solidity ^0.4.18;

contract checkBalance {
	function checkBalanceOf(address owner) constant returns (uint256) {
		uint256 balance = owner.balance;
		return balance;
	}
}