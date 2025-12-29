// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract LiquorTrading is Ownable, Pausable {

    // Constructor to pass the initial owner to Ownable
    constructor(address initialOwner) Ownable(initialOwner) {
        transferOwnership(initialOwner);
    }

    struct Purchase {
        address buyer;
        uint256 liquorId;
        string itemName;
        uint256 priceETH;
        uint256 timestamp;
        string userName;
        string userEmail;
    }

    mapping(uint256 => Purchase) public purchases;
    uint256 public purchaseCount;

    event PurchaseMade(
        uint256 purchaseId,
        address indexed buyer,
        uint256 liquorId,
        string itemName,
        uint256 priceETH,
        uint256 timestamp,
        string userName,
        string userEmail
    );

    function makePurchase(
        uint256 liquorId,
        string memory itemName,
        uint256 priceETH,
        string memory userName,
        string memory userEmail
    ) public payable whenNotPaused {
        require(msg.value == priceETH, "Incorrect ETH amount sent");

        purchaseCount++;
        purchases[purchaseCount] = Purchase(
            msg.sender,
            liquorId,
            itemName,
            priceETH,
            block.timestamp,
            userName,
            userEmail
        );
        emit PurchaseMade(
            purchaseCount,
            msg.sender,
            liquorId,
            itemName,
            priceETH,
            block.timestamp,
            userName,
            userEmail
        );
    }

    function getPurchase(uint256 purchaseId)
    public
    view
    returns (address, uint256, string memory, uint256, uint256, string memory, string memory)
    {
        Purchase memory p = purchases[purchaseId];
        return (p.buyer, p.liquorId, p.itemName, p.priceETH, p.timestamp, p.userName, p.userEmail);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }
}