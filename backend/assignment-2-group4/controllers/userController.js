import UserModel from '../models/userModel.js';
import TransactionModel from '../models/transactionModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

/**
 * UserController - Handles user-related API logic
 */
class UserController {
    /**
     * Signs up a new user
     */
    static async signup(req, res) {
        const { username, email, fullName, password, eth_address } = req.body;
        if (!username || !email || !fullName || !password || !eth_address) {
            return res.status(400).json({ error: 'All fields are required' });
        }
    
        try {
            // Check for existing username
            const existingUserByUsername = await UserModel.findUserByUsername(username);
            if (existingUserByUsername) {
                return res.status(409).json({ error: 'Username already exists' });
            }
    
            // Check for existing eth_address (normalized)
            const eth_address_lower = eth_address.toLowerCase();
            const existingUserByEthAddress = await UserModel.findUserByEthAddress(eth_address_lower);
            if (existingUserByEthAddress) {
                return res.status(409).json({ error: 'Ethereum address already in use. Please use your correct wallet.' });
            }
    
            // Note: Add findUserByEmail if email uniqueness is also checked separately
            const userId = await UserModel.createUser(username, email, fullName, password, eth_address_lower);
            const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(201).json({ message: 'User created successfully', userId, token });
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                res.status(409).json({ error: 'Username, email, or Ethereum address already exists' });
            } else {
                res.status(500).json({ error: 'Server error. Please try again later.' });
            }
        }
    }

    /**
     * Logs in an existing user
     */
    static async login(req, res) {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }
        try {
            const user = await UserModel.findUserByUsername(username);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid password' });
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'User signed in successfully', token });
        } catch (err) {
            res.status(500).json({ error: 'Server error. Please try again later.' });
        }
    }

    /**
     * Retrieves user profile
     */
    static async getProfile(req, res) {
        const userId = req.userId;
        try {
            const user = await UserModel.findUserById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            // Exclude password from response
            const { password, ...userData } = user;
            res.json(userData);
        } catch (err) {
            res.status(500).json({ error: 'Server error. Please try again later.' });
        }
    }

    /**
     * Retrieves user's transaction history
     */
    static async getTransactions(req, res) {
        const userId = req.userId;
        try {
            const transactions = await TransactionModel.getTransactionsByUserId(userId);
            res.json(transactions.map(tx => ({
                id: tx.id,
                item: tx.liquorName,
                amount: tx.amountETH,
                date: tx.timestamp.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok', hour12: false }),
                liquorTrader: tx.liquorTrader
            })));
        } catch (err) {
            res.status(500).json({ error: 'Server error. Please try again later.' });
        }
    }
    /**
     * Creates a new transaction for the user
     */
    static async createTransaction(req, res) {
        const {user_id, liquor_id, amountETH, timestamp, liquorTrader} = req.body;

        // Validate required fields
        if (!user_id || !liquor_id || !amountETH || !timestamp || !liquorTrader) {
            return res.status(400).json({error: 'All fields are required'});
        }

        try {
            // Save the transaction in the database
            const transactionId = await TransactionModel.createTransaction(
                user_id,
                liquor_id,
                amountETH,
                timestamp,
                liquorTrader
            );

            res.status(201).json({
                message: 'Transaction created successfully',
                transactionId,
            });
        } catch (err) {
            console.error('Error creating transaction:', err);
            res.status(500).json({error: 'Server error. Please try again later.'});
        }
    }
}

export default UserController;