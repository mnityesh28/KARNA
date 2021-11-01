import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xaf2557578966E75Ef67195EA45e3c27Cb1ab1f0d"
);

export default instance;