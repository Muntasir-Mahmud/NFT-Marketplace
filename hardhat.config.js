require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readdirSync(".secret").toString();


module.exports = {
    networks: {
        hardhat: {
            chainId: 1337,
        },
        mumbai: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/dpW6cbFtqSFgum7dVtsCN3LgXF2QrFcj",
            accounts: [privateKey]
        },
        mainnet: {
            url: "https://polygon-mainnet.g.alchemy.com/v2/RN3BV8eUjMNezxe2-C9MgptIrnavVt49",
            accounts: [privateKey]
        }
    },
    solidity: "0.8.4",
};
