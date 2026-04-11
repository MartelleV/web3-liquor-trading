# Web3 Liquor Trading Application

## Overview
A full-stack, decentralized Web3 liquor trading application built with React - Vite - Metamask - Hardhat, developed for Assignment 2 of COS30049 (Computing Innovation Project).


## Team Members (Group 4 - The AcTUAHators)
- Vu Phan Hoang An
- Nguyen Hai Dang
- Bui Cong Minh


## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Development Notes](#development-notes)
- [Testing Guidelines](#testing-guidelines)
- [Contributors](#contributors)


## Prerequisites
- Node.js (LTS version - 22.14.0 recommended)
- Git
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Metamask


## Installation

### STEP 1. Clone the Repository

```bash
git clone https://github.com/COS30049-SUVHN/group-project-spr-2025-g4.git
cd group-project-spr-2025-g4/backend/assignment-2-group4
```

Alternatively, use GitHub Desktop's GUI to clone the repository:

<img width="1728" alt="Screenshot 2025-03-22 at 12 07 23" src="https://github.com/user-attachments/assets/f5ac10dd-9fa1-4072-a329-ca616cf62dd8" />




### STEP 2. Install Dependencies


**FOR FRONTEND DIRECTORY**

Navigate from ```group-project-spr-2025-g4``` to ```assignment-1-group4``` to install dependencies (already defined in ```package.json``` file).

```bash
cd frontend/assignment-1-group4
npm install
```

A list of correctly installed dependencies (with ```NodeJS v22.14.0```) should look like this:
<img width="1236" alt="Screenshot 2025-03-23 at 22 55 53" src="https://github.com/user-attachments/assets/edbfc54c-59d2-4a96-94da-e2422c257e58" />
<br>


**FOR MAIN BACKEND SCRIPT DIRECTORY**

Navigate from ```group-project-spr-2025-g4``` to ```assignment-2-group4``` to install dependencies (already defined in ```package.json``` file).

```bash
cd backend/assignment-2-group4
npm install
```

A list of correctly installed dependencies (with ```NodeJS v22.14.0```) should look like this:
<img width="1232" alt="Screenshot 2025-03-22 at 12 10 44" src="https://github.com/user-attachments/assets/48848b53-a264-4e84-80f0-22989c908b4e" />
<br>


**FOR HARDHAT DIRECTORY**

Navigate from ```group-project-spr-2025-g4``` to ```assignment-2-group4/hardhat``` to install dependencies (already defined in ```package.json``` file).

```bash
cd backend/hardhat
npm install
```

A list of correctly installed dependencies (with ```NodeJS v22.14.0```) should look like this:
<img width="1119" alt="Screenshot 2025-03-22 at 12 14 45" src="https://github.com/user-attachments/assets/80f415fc-834a-4c39-b3de-0873f121bc4f" />
<br>


**FOR METAMASK**

Ensure your current browser supports Metamask's extension/add-on to simulate the blockchain trading process of this application.
For installation guidelines on specific browsers and further documentation, visit: https://metamask.io/download.
Metamask currently supports Chrome, Firefox, Opera, Brave, Microsoft Edge browsers; alongside a Mobile Application and a Web3 Application.

Upon successful installation, Metamask will automatically navigate you to a sign-in page, where you can create your own wallet with your password and Secret Recovery Phrase. Remember those as they are crucial.

A successful setup (in Firefox, MacOS) looks as followed:

<img width="1728" alt="Screenshot 2025-03-22 at 23 31 44" src="https://github.com/user-attachments/assets/1b96d8d6-f495-4b85-931b-3f99ea49d30b" />
<br>
<br>


## Project Structure for Assignment 2

```
group-project-spr-2025-g4/
│
├── artifacts/
│
│      
├── backend/                         # For Assignment 2.
│   │
│   ├── assignment-2-group4/         # Main Back-end Script directory to store JS script.
│   │   ├── controllers/
│   │   │   ├── liquorController.js
│   │   │   └── userController.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── models/
│   │   │   ├── liquorModel.js
│   │   │   ├── transactionModel.js
│   │   │   └── userModel.js
│   │   ├── routes/
│   │   │   ├── liquorRoutes.js
│   │   │   └── userRoutes.js
│   │   ├── node-modules/            # This is generated after npm install.
│   │   ├── .env                     # .env file to store environment variables (such as DB host, DB password).
│   │   ├── app.js                   # Main App to run with Node.
│   │   ├── db.js
│   │   ├── eventListener.js
│   │   ├── folder-structure.txt
│   │   ├── package-lock.json
│   │   ├── package.json             # Please pay attention to package JSON files, and clone them properly for npm install to work properly.
│   │   └── seed.js
│   │
│   ├── hardhat/                     # Main Hardhat directory to run Hardhat network and deploy the smart contract.
│   │   ├── contracts/
│   │   │   └── LiquorTrading.sol    # Solidity contract for trading.
│   │   ├── node-modules/            # This is generated after npm install.
│   │   ├── scripts/
│   │   │   └── deploy.js            # Deployment script.
│   │   ├── hardhat.config.js
│   │   ├── package.json             # Please pay attention to package JSON files, and clone them properly for npm install to work properly.
│   │   └── package-lock.json
│   ├── README.md                    # README for Assignment 2.
│   ├── package-lock.json
│   └── schema.sql
│
│
├── frontend/             
│   └── assignment-1-group4/  # Main code for Assignment 1.
│       ├── src/              # Store source code for pages, components, styles, authentication context, and main App. Images are moved to public/assets/.
│       │
│       ├── public            # Store images in the assets subfolder.
│       │   └── assets/
│       ├── package.json      # Please pay attention to package JSON files, and clone them properly for npm install to work properly.
│       ├── README.md         # README for Assignment 1.
│       ├── vite.config.js
│       ├── eslint.config.js
│       ├── index.html
│       ├── eslint.config.js
│       ├── .gitignore
│       └── package-lock.json
│
├── .gitignore
└── README.md
```


<img width="283" alt="Screenshot 2025-03-22 at 12 30 11" src="https://github.com/user-attachments/assets/0bda2f78-9d2d-47d2-b773-21455ed74ac5" />




## STEP 3. Running the Application

First, make sure that you are currently working in the group-project-spr-2025-g4 directory.

1. Correctly set up the local MySQL Database (using the provided schema in schema.sql); and the .env file on your local machine.

```bash
DB_HOST=your_database_host #Placeholder
DB_USER=your_database_user #Placeholder
DB_PASSWORD=your_database_password #Placeholder
DB_NAME=liquor_trading
JWT_SECRET=your_jwt_secret #Placeholder
```

Then, seed the database by running ```seed.js``` in the ```backend/assignment-2-group4``` folder.
```bash
node backend/assignment-2-group4/seed.js
```

2. Navigate to the project's Hardhat directory:
```bash
cd backend/hardhat
```

3. Start the Hardhat Network and get auto-generated accounts:
```bash
npx hardhat node
```

4. Deploy the Contract:
```bash
npx hardhat run scripts/deploy.js --network hardhat
```

5. (**Optional**) Get the contract's address (e.g.: ```0x5FbDB2315678afecb367f032d93F642f64180aa3```) and update ```contractAddress``` variable accordingly in ```DetailsPage.jsx``` and ```eventListener.js``` files:

```javascript
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Usually, this is the fixed address of our contract.
```

This step should only be done if the contract address differs from this fixed address.

6. Open MetaMask extension on your browser and import one account using the PRIVATE KEY provided in the local Hardhat Network console (e.g.: ```0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e```).

<img width="1728" alt="Screenshot 2025-03-24 at 13 36 53" src="https://github.com/user-attachments/assets/71d0eb15-a25b-4462-a449-e8d4862ef571" />


7. (**Optional**) Now, after importing the account, navigate to ```Select a network``` (in the dropdown menu to the left of your account's name) and choose ```Add a custom network``` in the Metamask viewpage. Remember to enable ```Show Test Networks``` too.
(If you have already configured your custom network, you can skip this step).

<img width="1728" alt="Screenshot 2025-03-24 at 13 38 31" src="https://github.com/user-attachments/assets/68951e46-f782-4786-a360-9209adbf5380" />


8. Enter ```Network name``` (any that you prefer).


9. Add a custom network using ```http://localhost:8545``` as ```Default RPC URL```.


10. Set ```Chain ID``` to ```1337```.


11. Set ```Currency symbol``` to ```ETH```.


12. Click ```Save```. Then, select your new network in the network menu. Usually, your network would be shown under ```Test networks``` section.

<img width="1728" alt="Screenshot 2025-03-24 at 13 40 02" src="https://github.com/user-attachments/assets/9549bc9b-8628-478a-8984-34de38b418a5" />

13. Split another window for your terminal. Then, navigate to the project's main Back-End script directory:
```bash
cd backend/assignment-2-group4
```

14. Run app.js with NodeJS.
```bash
node app.js
```
You should see a successful prompt like this.

<img width="1182" alt="Screenshot 2025-03-24 at 13 43 16" src="https://github.com/user-attachments/assets/b32cdefd-108b-4dc3-b5f4-88434ef1810e" />

15. Leave the Hardhat network and the Backend App running. Split another terminal window, then navigate to Front-End directory:
```bash
cd frontend/assignment-1-group4
```


16. Start the Front-End server:
```bash
npm run dev
```


17. Go to ```http://localhost:5173```. Then, create an user account, or log in if you have an existing account in your users table in the database. Remember to connect to your Metamask wallet when creating a new account, by hitting ```Connect to Metamask``` button in the Sign-up page.

<img width="1728" alt="Screenshot 2025-03-24 at 13 50 31" src="https://github.com/user-attachments/assets/80d66797-4120-4b3a-a693-da3f5fe3607d" />


18. After signing in, your account will dynamically fetch balance from your Metamask wallet (the allocated amount for each Hardhat-generated account is ```10000ETH```).
Now, feel free to browse the shop and choose any liquor you prefer, all while ensuring that MetaMask is connected to the custom network.

<img width="1728" alt="Screenshot 2025-03-24 at 14 12 50" src="https://github.com/user-attachments/assets/8db1476d-22fb-41ab-b5da-6f49bb4bf2f3" />

19. Select a liquor you want to trade for in the Shop page.
 
<img width="1728" alt="Screenshot 2025-03-24 at 17 51 50" src="https://github.com/user-attachments/assets/c589eedc-630b-4ef2-8774-098edb97abe4" />


20. On the details page of the selected liquor, click ```Trade with ETH...```.


21. A confirmation dialog will pop up, click ```Confirm``` to open MetaMask and proceed with the purchase.

<img width="1728" alt="Screenshot 2025-03-24 at 14 08 35" src="https://github.com/user-attachments/assets/aa10d5a2-b7d4-4140-8c18-328fab0a8c85" />


22. Proceed with another confirmation in Metamask. Then, an alert will appear to notify ```Purchase successful``` on the website. Hit "OK" for the dialogs and alerts to disappear, indicating that your trade is successful.

<img width="1728" alt="Screenshot 2025-03-24 at 14 09 54" src="https://github.com/user-attachments/assets/61395011-f100-4386-b8db-5951c5c00b4e" />


23. Due to the complications of gas prices (network fees), please check ```Activity``` tab in your Metamask wallet for full purchase price and details.

24. Please note that the FrontEnd as well as BackEnd's ```userController.js``` check for overlapping Ethereum addresses. That is, if you use a wrong wallet that is NOT connected to your account on Signup, or use an already connected wallet (of another account), the website will not allow you to proceed log-ins, purchases, or balance-checking. It will also alert you on wallet switch during purchases.

Below is an example of trying to trade with a wrong wallet.
<img width="1728" alt="Screenshot 2025-03-24 at 17 54 38" src="https://github.com/user-attachments/assets/8cc693a4-a699-4f3b-840a-2e5e48a34e39" />



## Features

### Current Implementation
- User Authentication, Transaction History, Liquor Lists and Details with Database Integration
- Trading Interface with Elegant, Modern UI
- Balance Checking
- Form Validation
- Metamask Integration


### Authentication Guidelines
The application currently implements rigid authentication with these validation:
- Required fields cannot be empty
- Passwords must be at least 12 characters long with at least:
  * ONE capital letters among MANY normal-case letters
  * ONE special character (e.g.: @, /, ?, #)
  * TWO numbers
And passwords must not be the same as another already-existing user
- Email must be in a valid format

Example credentials for testing:

```
Full Name: Ryan Goslint
Username: ihatejavascript
Email: djflks@gmail.com
Password: iloveLebron@123456
```


## Development Notes
- Built with React + Vite for optimal performance and flexibility
- Material-UI (@mui/material) for consistent UI components
- React Router for navigation
- Responsive design for various screen sizes
- Metamask for trading simulation
- Rigid database design for authentication and transactions


## Testing Guidelines
1. Verify login/sign-up functionalities with database
2. Test navigation between logged-in and logged-out states
3. Verify trading functionalities with database and Metamask
4. Check transaction history display with database
5. Test balance checking features


## Contributors
**The AcTUAHators - Group 4**
- Vu Phan Hoang An
- Nguyen Hai Dang
- Bui Cong Minh

---
*For questions or support, please contact our development team.*
