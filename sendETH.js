var Web3 = require('web3');
var util = require('ethereumjs-util');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/...'));
var address = '...';
var key ='...';

var tx = require('ethereumjs-tx');
var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount(address)),
    gasLimit: web3.toHex(1500000),
    gasPrice: web3.toHex(80000000),
    from: address,
    to: '...',
    value: 1000000000000000000,
    data: ''
};

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

sendRaw(rawTx);



