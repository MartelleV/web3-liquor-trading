# Web3 Liquor Trading Application

## Overview
A decentralized Web3 liquor trading application built with React and Vite, developed for Assignment 1 of COS30049 (Computing Innovation Project).


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
- Node.js (LTS version recommended)
- Git
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)


## Installation

### STEP 1. Clone the Repository

```bash
git clone https://github.com/COS30049-SUVHN/group-project-spr-2025-g4.git
cd group-project-spr-2025-g4/frontend/assignment-1-group4
```

Alternatively, use GitHub Desktop's GUI to clone the repository:


<img width="504" alt="GitHub Desktop Clone UI" src="https://github.com/user-attachments/assets/79357a2c-65d2-4c9d-8f8b-d655fcdedb7f" />



### STEP 2. Install Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom
```

## Project Structure

```
group-project-spr-2025-g4/
├── .idea/                    # Project setting files
├── artifacts/             
├── backend/                  # For Assignment 2
├── frontend/             
│   └── assignment-1-group4/  # Main code for Assignment 1
│       ├── src/              # Store images (assets) and source code for pages, components, styles, and main App
│       ├── public/
│       └── package.json
├── .gitignore
└── README.md
```


<img width="478" alt="Folder Structure" src="https://github.com/user-attachments/assets/89d2a1c2-a751-4cda-8de7-8841237d3d91" />



## STEP 3. Running the Application

1. Navigate to the project directory:
```bash
cd frontend/assignment-1-group4
```

2. Start the development server:
```bash
npm run dev
```

3. Access the application:
- Open your browser and navigate to `http://localhost:5173`
- Note: If using Firefox, Safari, or Microsoft Edge, you may need to refresh the page on first load
- A successful run on Terminal looks like this (in MacOS - Zshell):

<img width="1490" alt="Successful Run" src="https://github.com/user-attachments/assets/2915fdab-2dc5-491b-b00b-f5220005a713" />


- To stop, press Ctrl + C on the Terminal while running. The development server will stop.

<img width="1530" alt="Stop Dev Server" src="https://github.com/user-attachments/assets/3239b197-cd81-495a-b7a8-8148dc8e3a70" />



## Features

### Current Implementation
- User Authentication (Frontend only)
- Trading Interface with Elegant, Modern UI
- Transaction History
- Balance Checking
- Basic Form Validation

- Shop Page Screenshot:

<img width="1728" alt="Shop Page Screenshot" src="https://github.com/user-attachments/assets/f512373f-bcbb-4333-bbc3-a5332b572efc" />


- Login Page Screenshot:

<img width="1728" alt="Login Screenshot" src="https://github.com/user-attachments/assets/c7ec295a-3325-4d34-bcdb-624426369820" />


- Liquor Details Page (on Login) Screenshot:

<img width="1728" alt="Liquor Details Page (on Login) Screenshot" src="https://github.com/user-attachments/assets/8fa9b3cb-7f6e-4dde-b213-63f5bbd486e5" />


- Trade Confirmation Popup Screenshot:

<img width="1728" alt="Trade Confirmation Popup Screenshot" src="https://github.com/user-attachments/assets/477636e1-0cd2-4ea4-870d-8a687e83e663" />


- User Profile Screenshot:

<img width="1728" alt="User Profile Screenshot" src="https://github.com/user-attachments/assets/03f542bd-2537-4091-a155-50e3d2eb5d63" />


- Insufficient Balance Checking Screenshot:

<img width="1728" alt="Insufficient Balance Checking Screenshot" src="https://github.com/user-attachments/assets/d5676b8a-bff8-411c-95f7-5ea6126dea28" />


- Login to Trade Screenshot:

<img width="1727" alt="Login to Trade Screenshot" src="https://github.com/user-attachments/assets/650fbb08-c7dc-4fd8-a4fd-b405fd52b3e7" />



### Authentication Guidelines
The application currently implements frontend-only authentication with basic validation:
- Required fields cannot be empty
- Passwords must be at least 6 characters long
- Email must be in a valid format

Example credentials for testing:

```
Username: ihatejavascript
Email: djflks@gmail.com
Password: brobrobro
```


### Limitations
- No backend integration yet
- Smart contracts to be implemented in future versions
- Minimal authentication security (for demo purposes only)


## Development Notes
- Built with React + Vite for optimal performance and flexibility
- Material-UI (@mui/material) for consistent UI components
- React Router for navigation
- Responsive design for various screen sizes


## Testing Guidelines
1. Verify login functionality
2. Test navigation between logged-in and logged-out states
3. Verify trading button functionality
4. Check transaction history display
5. Test balance checking features


## Contributors
**The AcTUAHators - Group 4**
- Vu Phan Hoang An
- Nguyen Hai Dang
- Bui Cong Minh

---
*For questions or support, please contact our development team.*
