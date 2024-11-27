const Facade = artifacts.require("SimpleStorageFacade");

module.exports = async function(deployer) {
    const facade = await Facade.deployed();
    
    await facade.set(43);
    
    const result = await facade.get();
    console.log(`Storage value: ${result}`);
};