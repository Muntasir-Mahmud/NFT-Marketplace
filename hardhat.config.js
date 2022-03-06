require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_MUMBAI_API_KEY_URL = process.env.ALCHEMY_MUMBAI_API_KEY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ALCHEMY_POLYGON_API_KEY_URL = process.env.ALCHEMY_POLYGON_API_KEY_URL;
const RINKEBY_API_KEY_URL = process.env.RINKEBY_API_KEY_URL;

module.exports = {
    networks: {
        hardhat: {
            chainId: 1337,
        },
        mumbai: {
            url: ALCHEMY_MUMBAI_API_KEY_URL,
            accounts: [PRIVATE_KEY],
        },
        mainnet: {
            url: ALCHEMY_POLYGON_API_KEY_URL,
            accounts: [PRIVATE_KEY]
        },
        rinkeby: {
            url: RINKEBY_API_KEY_URL,
            accounts: [PRIVATE_KEY],
        }
    },
    solidity: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
};
