// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "./SharedWallet.sol";

contract Wallet is SharedWallet {
    //events: money is withdrawn, money is received

    event MoneyWithdrawn (address indexed _to, uint _amount);
    event MoneyReceived (address indexed _from, uint _amount);

    //function to check balance 
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    //function to withdraw money
    function withdrawMoney(uint _amount) external OwnerOrWithinLimits(_amount) {
        require(_amount <= getBalance(), "Not enough funds!");
        
        if(!isOwner()) {deduceFromLimit(msg.sender, _amount);}
        
        payable(msg.sender).transfer(_amount);

        emit MoneyReceived(msg.sender, _amount);
    }

    //functions to receive money
    fallback() external payable {}
    receive() external payable {
        emit MoneyReceived(msg.sender, msg.value);
    }

    function renounceOwnership() public view override onlyOwner {
        revert("Can't renounce!");
    }
}