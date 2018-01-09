var Web3 = require('web3');
var tx = require('ethereumjs-tx');
var util = require('ethereumjs-util');
var fs = require('fs');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/...'));
var address = '...';
var key ='...';
var bytecode = '...';
var interface = [...
  ];
var val = fs.readFileSync('./data.csv');
val = val + '';
var arr = val.split('\n');
arr.pop();
var keys = [];
var values = [];
for(var i=0; i<arr.length;i++) {
  arr[i] = arr[i] + '';
  arr[i] = arr[i].split(";");
  keys[i] = arr[i][0];
  values[i] = arr[i][1];
}

var contractAddress = "...";
var contract =  web3.eth.contract(interface).at(contractAddress);

function sendRaw(rawTx) {
    var privateKey = new Buffer(key, 'hex');
    var transaction = new tx(rawTx);
    transaction.sign(privateKey);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
    '0x' + serializedTx, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount(address)),
    from: address,
    gasLimit: web3.toHex(1500000),
    gasPrice: web3.toHex(80000000),
    to: contractAddress,
    value: 0,
    data: contract.transferA.getData(keys, values, {from: address}),
    chainId: 3
};

sendRaw(rawTx);


