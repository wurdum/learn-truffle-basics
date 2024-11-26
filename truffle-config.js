require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(
        process.env.SEPOLIA_PRIVATE_KEY,
        process.env.SEPOLIA_INFURA_ENDPOINT
      ),
      network_id: 11155111,
      gas: 5500000,        // Gas limit
      confirmations: 2,    // # of blocks to wait
      timeoutBlocks: 200,  // # of blocks before timeout
      skipDryRun: true,     // Skip dry run
      networkCheckTimeout: 10000,
    }
  },
  compilers: {
    solc: {
      version: "0.8.19"  // Match your contract's version
    }
  }
};
