import LiquorModel from '../models/liquorModel.js';
import Web3 from 'web3';

const web3 = new Web3('http://localhost:8545');
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "getLiquors",
        "outputs": [
            { "name": "", "type": "uint256[]" }
        ],
        "type": "function"
    }
];
const contract = new web3.eth.Contract(abi, contractAddress);

/**
 * LiquorController - Handles liquor-related API logic
 */
class LiquorController {
    /**
     * Fetches all liquors
     */
    static async getAllLiquors(req, res) {
        try {
            const liquors = await LiquorModel.getAllLiquors();
            res.json(liquors);
        } catch (err) {
            res.status(500).json({ error: 'Server error. Please try again later.' });
        }
    }

    /**
     * Fetches a specific liquor by ID
     */
    static async getLiquorById(req, res) {
        const { id } = req.params;
        try {
            const liquor = await LiquorModel.getLiquorById(id);
            if (!liquor) return res.status(404).json({ error: 'Liquor not found' });
    
            liquor.image = `/assets/${liquor.image}`;
    
            res.json(liquor);
        } catch (err) {
            res.status(500).json({ error: 'Server error' });
        }
    }

    /**
     * Searches liquors by name or brand
     */
    static async searchLiquors(req, res) {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: 'Search term is required' });
        }
        try {
            const liquors = await LiquorModel.searchLiquors(name);
            res.json(liquors);
        } catch (err) {
            res.status(500).json({ error: 'Server error. Please try again later.' });
        }
    }

    /**
     * Filters liquors by type and price range
     */
    static async filterLiquors(req, res) {
        const { type, minPrice, maxPrice } = req.query;
        try {
            const liquors = await LiquorModel.filterLiquors(type, minPrice, maxPrice);
            res.json(liquors);
        } catch (err) {
            res.status(500).json({ error: 'Server error. Please try again later.' });
        }
    }
}

export default LiquorController;