// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract SharedWallet is Ownable {

    //event: limit has been changed
    event LimitChanged (address indexed _changed, uint _oldLimit, uint _newLimit);

    // object with wallet members
    mapping(address => User) public members;

    //definition of the struct User
    struct User {
        string name;
        uint limit;
        bool is_admin;
    }

    // delete users from array "members"
    function deleteUser(address _member) public onlyOwner {
        delete members[_member];
    }

    // function to make user an admin
    function makeAdmin(address _member) public onlyOwner {
        members[_member].is_admin = true;
    }

    // function to make user an admin
    function revokeAdmin(address _member) public onlyOwner {
        members[_member].is_admin = false;
    }

    //modifier: owner or within the limit
    modifier OwnerOrWithinLimits(uint _amount) {
        require(isOwner() || members[msg.sender].is_admin == true || members[msg.sender].limit >= _amount, "Not allowed!");
        _;
    }

    // function owner check
    function isOwner() internal view returns(bool) {
        return owner() == msg.sender;
    }

    // function admin check
    function isAdmin(address _member) public view returns(bool) {
        return members[_member].is_admin == true;
    }

    // function to add limits
    function addLimit(address _member, uint _limit) external {
        members[_member].limit = _limit;
    }

    // function to deduce from limit
    function deduceFromLimit(address _member, uint _amount) internal {
        uint oldLimit = members[_member].limit;
        members[_member].limit -= _amount;

        emit LimitChanged(_member, oldLimit, members[_member].limit);
    }
}