const Storage = artifacts.require("SimpleStorage");
const Facade = artifacts.require("SimpleStorageFacade");

module.exports = function(deployer) { 
    deployer.deploy(Facade, Storage.address);
};