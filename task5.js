var Web3 = require('web3');
var tx = require('ethereumjs-tx');
var util = require('ethereumjs-util');
var fs = require('fs');
var isArray = require('isarray');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/...'));
var address = '...';
var key ='...';
var bytecode = '...';
var interface = [...
  ];

var contractAddress = "...";
var contract =  web3.eth.contract(interface).at(contractAddress);

var add = ["array",
           "of",
           "address"];

function checkTokenBalance(address) {
  if(isArray(address)) {
    for(var i=0; i < address.length; i++)
    {
      console.log(contract.balanceOf(address[i]));
    }
  }
  else {
    console.log(contract.balanceOf(address));
  }
}

checkTokenBalance("any address");

checkTokenBalance(add);
