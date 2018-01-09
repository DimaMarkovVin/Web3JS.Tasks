pragma solidity ^0.4.18;

contract ThisCoin {
	string public constant name = "NT Token";
	string public constant symbol = "NTT";
	uint8 public constant decimals = 0;


	address public owner;


	mapping (address => uint256) balances;


	function ThisCoin(uint256 _totalSupply) public {
		owner = msg.sender;
		balances[owner] = _totalSupply;

	}

	function balanceOf(address _owner) public constant returns (uint256 balance) {
		return balances[_owner];
	}

}