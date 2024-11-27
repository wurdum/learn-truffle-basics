const web3 = require('web3');
require('dotenv').config();

module.exports = async function (callback) {
    try {
        const endpoint = new web3.Web3(process.env.SEPOLIA_INFURA_ENDPOINT);

        const block = await endpoint.eth.getBlock('latest');

        console.log(block);

        callback();
    } catch (error) {
        callback(error);
    }
};
