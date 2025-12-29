import db from '../db.js';
import bcrypt from 'bcrypt';

/**
 * UserModel - Handles database operations for users
 */
class UserModel {
    /**
     * Creates a new user with hashed password
     * @param {string} username 
     * @param {string} email 
     * @param {string} fullName 
     * @param {string} password 
     * @param {string} eth_address 
     * @returns {Promise<number>} Inserted user ID
     */
    static async createUser(username, email, fullName, password, eth_address) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const eth_address_lower = eth_address.toLowerCase(); // Normalize to lowercase
        return new Promise((resolve, reject) => {
            db.query(
                'INSERT INTO users (username, email, fullName, password, eth_address) VALUES (?, ?, ?, ?, ?)',
                [username, email, fullName, hashedPassword, eth_address_lower],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result.insertId);
                }
            );
        });
    }

    /**
     * Finds a user by username
     * @param {string} username 
     * @returns {Promise<object>} User object or undefined
     */
    static async findUserByUsername(username) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
                if (err) reject(err);
                else resolve(results[0]);
            });
        });
    }

    /**
     * Finds a user by ID
     * @param {number} id 
     * @returns {Promise<object>} User object or undefined
     */
    static async findUserById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
                if (err) reject(err);
                else resolve(results[0]);
            });
        });
    }

    /**
     * Finds a user by Ethereum address
     * @param {string} eth_address 
     * @returns {Promise<object>} User object or undefined
     */
    static async findUserByEthAddress(eth_address) {
        const eth_address_lower = eth_address.toLowerCase(); // Normalize to lowercase
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE eth_address = ?', [eth_address_lower], (err, results) => {
                if (err) reject(err);
                else resolve(results[0]);
            });
        });
    }
}

export default UserModel;