import db from './db.js';
import { liquors } from '../../frontend/assignment-1-group4/src/data/liquors.js';

/**
 * Seeds the liquors table with data from frontend
 */
async function seedLiquors() {
    for (const liquor of liquors) {
        await new Promise((resolve, reject) => {
            db.query(
                'INSERT INTO liquors (name, type, brand, priceETH, image, background, makingMethod, brandHistory, suitableFor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    liquor.name,
                    liquor.type,
                    liquor.brand,
                    liquor.priceETH,
                    liquor.image,
                    liquor.background,
                    liquor.makingMethod,
                    liquor.brandHistory,
                    liquor.suitableFor
                ],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                }
            );
        });
    }
    console.log('Liquors seeded successfully');
}

seedLiquors()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('Error seeding database:', err);
        process.exit(1);
    });