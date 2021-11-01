import Web3 from "web3";

let web3;

if(typeof window!== 'undefined' && typeof window.web3!== 'undefined') {
    // We are in the browser and the metamask is running
    window.ethereum.enable();
    web3 =new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider (
        'https://rinkeby.infura.io/v3/8bcb7770b18d4ee680ebe8225b4fdf0d'
    );
    web3= new Web3(provider);
}
export default web3;