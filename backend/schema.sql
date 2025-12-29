CREATE DATABASE liquor_trading;
USE liquor_trading;

-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    fullName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    eth_address VARCHAR(42) UNIQUE
);

-- Liquors table
CREATE TABLE liquors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    priceETH DECIMAL(18,5) NOT NULL,
    image VARCHAR(255) NOT NULL,
    background TEXT,
    makingMethod TEXT,
    brandHistory TEXT,
    suitableFor TEXT
);

-- Transactions table
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    liquor_id INT NOT NULL,
    amountETH DECIMAL(18,5) NOT NULL,
    timestamp DATETIME NOT NULL,
    liquorTrader VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (liquor_id) REFERENCES liquors(id)
);

-- Indexes for efficient querying
CREATE INDEX idx_liquors_name ON liquors(name);
CREATE INDEX idx_liquors_type ON liquors(type);
CREATE INDEX idx_transactions_user_id ON transactions(user_id);