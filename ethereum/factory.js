import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xf923174F2f2932Fd343AAd659bBA1dc0a315336d"
);

export default instance;