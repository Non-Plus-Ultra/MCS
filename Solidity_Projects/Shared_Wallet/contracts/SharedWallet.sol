// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract SharedWallet is Ownable {
    // object with wallet members
    mapping(address => uint) public members;

    //modifier: owner or within the limit
    modifier OwnerOrWithinLimits(uint _amount) {
        require(isOwner() || members[msg.sender] >= _amount, "Not allowed!");
        _;
    }

    // function owner check
    function isOwner() internal view returns(bool) {
        return owner() == msg.sender;
    }

    // function to add limits
    function addLimit(address _member, uint _limit) external {
        members[_member] = _limit;
    }

    // function to deduce from limit
    function deduceFromLimit(address _member, uint _amount) internal {
        members[_member] -= _amount;
    }
}