import db from '../db.js';

/**
 * LiquorModel - Handles database operations for liquors
 */
class LiquorModel {
    /**
     * Retrieves all liquors
     * @returns {Promise<object[]>} Array of liquor objects
     */
    static async getAllLiquors() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM liquors', (err, results) => {
                if (err) reject(err);
                else {
                    const baseUrl = 'http://localhost:5173';
                    const updatedResults = results.map(liquor => ({
                        ...liquor,
                        image: `${baseUrl}/assets/${liquor.image}`
                    }));
                    resolve(updatedResults);
                }
            });
        });
    }

    /**
     * Retrieves a liquor by ID
     * @param {number} id 
     * @returns {Promise<object>} Liquor object or undefined
     */
    static async getLiquorById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM liquors WHERE id = ?', [id], (err, results) => {
                if (err) reject(err);
                else resolve(results[0]);
            });
        });
    }

    /**
     * Searches liquors by name or brand
     * @param {string} name 
     * @returns {Promise<object[]>} Array of matching liquors
     */
    static async searchLiquors(name) {
        return new Promise((resolve, reject) => {
            db.query(
                'SELECT * FROM liquors WHERE name LIKE ? OR brand LIKE ?',
                [`%${name}%`, `%${name}%`],
                (err, results) => {
                    if (err) reject(err);
                    else resolve(results);
                }
            );
        });
    }

    /**
     * Filters liquors by type and price range
     * @param {string} type 
     * @param {number} minPrice 
     * @param {number} maxPrice 
     * @returns {Promise<object[]>} Array of matching liquors
     */
    static async filterLiquors(type, minPrice, maxPrice) {
        let query = 'SELECT * FROM liquors WHERE 1=1';
        const params = [];
        if (type) {
            query += ' AND type = ?';
            params.push(type);
        }
        if (minPrice !== undefined) {
            query += ' AND priceETH >= ?';
            params.push(minPrice);
        }
        if (maxPrice !== undefined) {
            query += ' AND priceETH <= ?';
            params.push(maxPrice);
        }
        return new Promise((resolve, reject) => {
            db.query(query, params, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
}

export default LiquorModel;