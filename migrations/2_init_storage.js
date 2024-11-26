const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function(deployer) {
    const storage = await SimpleStorage.deployed();
    await storage.set(42);

    const result = await storage.get();
    console.log(`Storage value: ${result}`);
}
