pragma solidity ^0.4.18;

contract TestToken {
	string public constant name = "Dima`s Token";
	string public constant symbol = "DT";
	uint8 public constant decimals = 0;

	uint256 _totalSupply = 1000000;

	address public owner;

	mapping (address => uint256) balances;

	mapping (address => mapping (address => uint256)) allowed;

	function TestToken() public {
		owner = msg.sender;
		balances[owner] = _totalSupply;
	}


	function totalSupply() public constant returns (uint256 totalSupply) {
		totalSupply = _totalSupply;
		return totalSupply;
	}

	function balanceOf(address _owner) public constant returns (uint256 balance) {
		return balances[_owner];
	}

	function transfer(address _to, uint256 _value) returns (bool success) {
		if(balances[msg.sender] >= _value && _value > 0 && balances[_to] + _value >= balances[_to]) { 
			balances[msg.sender] -= _value;
			balances[_to] += _value;
			Transfer(msg.sender, _to, _value);
			return true;
		}
		else {
			return false;
		}
	}

	function transferA(address[] _to, uint256[] _value) {
		for(uint i=0; i<_to.length; i++) {		
			transfer(_to[i], _value[i]);
		}
	}

	function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
		if(balances[_from] >= _value && balances[_to] + _value >= balances[_to] && allowed[_from][msg.sender] >= _value) { 
			balances[_from] -= _value;
			balances[_to] += _value;
			Transfer(_from, _to, _value);
			return true;
		}
		else {
			return false;
		}
	}

	function approve(address _spender, uint256 _value) returns (bool success) {
		allowed[msg.sender][_spender] = _value;
		Approval(msg.sender, _spender, _value);
		return true;
	}

	function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
		return allowed[_owner][_spender];
	}
	event Transfer(address indexed _from, address indexed _to, uint256 _value);
	event Approval(address indexed _owner, address indexed _spender, uint256 _value);

}