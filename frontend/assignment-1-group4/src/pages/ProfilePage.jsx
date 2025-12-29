// src/pages/ProfilePage.jsx
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

export default function ProfilePage() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [ethBalance, setEthBalance] = useState(null);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!user) return;

            // Check if MetaMask is installed
            if (!window.ethereum) {
                alert('MetaMask is not installed.');
                return;
            }

            // Open MetaMask and get active wallet
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const activeWallet = accounts[0];
    
            // Verify the connected wallet
            if (activeWallet.toLowerCase() !== user.eth_address.toLowerCase()) {
                alert('Please make sure you are using the right wallet associated with your account, then reload the page.');
                setEthBalance(null); // Do not display balance if wallet doesn't match
                return;
            }
    
            try {
                // Fetch transactions
                const token = localStorage.getItem('token');
                const transactionsResponse = await axios.get('http://localhost:3001/api/users/transactions', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setTransactions(transactionsResponse.data);
    
                // Fetch ETH balance
                const balance = await web3.eth.getBalance(activeWallet);
                setEthBalance(web3.utils.fromWei(balance, 'ether'));
            } catch (error) {
                console.error('Error fetching data:', error);
                if (error.response?.status === 401) {
                    logout();
                    navigate('/login');
                }
            }
        };
    
        if (user) {
            fetchData();
        }
    }, [user, navigate, logout]);

    if (!user) {
        return null;
    }

    return (
        <Container maxWidth="md" sx={{
            py: 4,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box className="filters-container" sx={{
                p: 4,
                width: '100%',
            }}>
                <Typography variant="h3" sx={{ mb: 4, color: 'secondary.main' }}>
                    Your Profile
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>Wallet Balance</Typography>
                    <Typography variant="h4" color="secondary.main">
                        {ethBalance !== null ? `ETH ${parseFloat(ethBalance).toFixed(5)}` : 'Loading...'}
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>Transaction History</Typography>
                    <List>
                        {transactions.map((tx, index) => (
                            <ListItem key={index} sx={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
                                <ListItemText
                                    primary={tx.item}
                                    secondary={`${tx.date} - ETH ${tx.amount} to ${tx.liquorTrader}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onClick={() => {
                        logout();
                        navigate('/');
                        }}
                    sx={{
                        mt: 3,
                        fontSize: '1.6rem',
                        border: '4px solid var(--secondary.main)',
                        borderRadius: '16px'
                    }}
                >
                    Log Out
                </Button>
            </Box>
        </Container>
    );
}