require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("./task/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL|| "key"
const PRIVATE_KEY = process.env.PRIVATE_KEY|| "key"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY|| "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY|| "key"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
        },
    },
    localHost: {
        url: "http://localhost:8545/",
        chainId: 31337,
    },

    solidity: "0.8.4",

    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReportor:{
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY
        
    }
}
