const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "crunch switch zone coach penalty arrest saddle alpha raven finger crystal chase",
  "https://rinkeby.infura.io/v3/8bcb7770b18d4ee680ebe8225b4fdf0d"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Deploying contract from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
};

deploy();