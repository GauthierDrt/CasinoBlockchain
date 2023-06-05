const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile.js');
 
const provider = new HDWalletProvider(
    'key shrimp shell dump about fog death unit hard find doomy surprise, "https://api-sepolia.etherscan.io/api?module=account&action=balance&address=0xeBebC71d1A78186Bb5b2369BC56F1589A57e5F30&tag=latest&apikey=HIUPY1VYJDKYUI79YC25N8VV7W9IJKBF82');
 
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`Attempting to deploy from account: ${accounts[0]}`);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0], gasLimit: '10000000' });
 
  console.log(interface);
  console.log('--------------------------------------------------------------------------------------------------------');
  console.log(`The contract was successfully deployed to: ${result.options.address}`);
  provider.engine.stop();
};
deploy();