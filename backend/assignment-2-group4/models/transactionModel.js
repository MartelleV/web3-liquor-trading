import db from '../db.js';

/**
 * TransactionModel - Handles database operations for transactions
 */
class TransactionModel {
    /**
     * Creates a new transaction
     * @param {number} user_id 
     * @param {number} liquor_id 
     * @param {string} amountETH
     * @param {string} timestamp 
     * @param {string} liquorTrader 
     * @returns {Promise<number>} Inserted transaction ID
     */
    static async createTransaction(user_id, liquor_id, amountETH, timestamp, liquorTrader) {
        return new Promise((resolve, reject) => {
            db.query(
                'INSERT INTO transactions (user_id, liquor_id, amountETH, timestamp, liquorTrader) VALUES (?, ?, ?, ?, ?)',
                [user_id, liquor_id, amountETH, timestamp, liquorTrader],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result.insertId);
                }
            );
        });
    }

    /**
     * Retrieves transactions by user ID with liquor name
     * @param {number} user_id 
     * @returns {Promise<object[]>} Array of transaction objects
     */
    static async getTransactionsByUserId(user_id) {
        return new Promise((resolve, reject) => {
            db.query(
                'SELECT t.*, l.name as liquorName FROM transactions t JOIN liquors l ON t.liquor_id = l.id WHERE t.user_id = ?',
                [user_id],
                (err, results) => {
                    if (err) reject(err);
                    else resolve(results);
                }
            );
        });
    }
}

export default TransactionModel;