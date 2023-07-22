import Web3 from 'web3';

// const infuraurl = 'http://43.200.52.189:8545';
const infuraurl = 'https://rpc.lvscan.io';
const provider = new Web3.providers.HttpProvider(infuraurl);
const web3 = new Web3(provider);

export { web3 };
