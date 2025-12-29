import Web3 from 'web3';
import UserModel from './models/userModel.js';
import TransactionModel from './models/transactionModel.js';

// Connect to Hardhat local node
const provider = new Web3.providers.WebsocketProvider('ws://localhost:8545');
const web3 = new Web3(provider);
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi = [
    {
        "anonymous": false,
        "inputs": [
            { "indexed": false, "name": "purchaseId", "type": "uint256" },
            { "indexed": true, "name": "buyer", "type": "address" },
            { "indexed": false, "name": "liquorId", "type": "uint256" },
            { "indexed": false, "name": "itemName", "type": "string" },
            { "indexed": false, "name": "priceETH", "type": "uint256" },
            { "indexed": false, "name": "timestamp", "type": "uint256" },
            { "indexed": false, "name": "userName", "type": "string" },
            { "indexed": false, "name": "userEmail", "type": "string" }
        ],
        "name": "PurchaseMade",
        "type": "event"
    }
];

const contract = new web3.eth.Contract(abi, contractAddress);

/**
 * Handles PurchaseMade event from the smart contract
 */
contract.events.PurchaseMade()
    .on('data', async (event) => { 
        const { purchaseId, buyer, liquorId, priceETH, timestamp, userName } = event.returnValues;
        console.log(`PurchaseMade: ID=${purchaseId}, Buyer=${buyer}, LiquorID=${liquorId}`);

        try {
            const user = await UserModel.findUserByEthAddress(buyer);
            if (!user) {
                console.error(`User with eth_address ${buyer} not found`);
                return;
            }

            // Convert priceETH from wei to ETH
            const priceInETH = web3.utils.fromWei(priceETH, 'ether');
            // Format timestamp for MySQL DATETIME compatibility
            const txTimestamp = new Date(Number(timestamp) * 1000).toISOString().slice(0, 19).replace('T', ' ');
            // Use userName from event instead of hardcoding 'Anna Freak'
            await TransactionModel.createTransaction(user.id, liquorId, priceInETH, txTimestamp, userName);

            console.log(`Transaction recorded for user ${user.id}, liquor ${liquorId}`);
        } catch (err) {
            console.error(`Error handling PurchaseMade event for PurchaseID=${purchaseId}, Buyer=${buyer}:`, err);
        }
    })

console.log('Listening for PurchaseMade events...');