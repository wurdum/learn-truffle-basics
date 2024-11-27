// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ISimpleStorage {
    function set(uint256 _data) external;
    function get() external view returns (uint256);
}

contract SimpleStorageFacade {
    ISimpleStorage private simpleStorage;

    event Set(address setter, uint256 data, uint256 timestamp);
    event Get(address reader, uint256 data, uint256 timestamp);

    constructor(address _simpleStorage) {
        simpleStorage = ISimpleStorage(_simpleStorage);
    }

    function set(uint256 _data) public {
        simpleStorage.set(_data);
        emit Set(msg.sender, _data, block.timestamp);
    }

    function get() public returns (uint256) {
        uint256 result = simpleStorage.get();
        emit Get(msg.sender, result, block.timestamp);
        return result;
    }
}