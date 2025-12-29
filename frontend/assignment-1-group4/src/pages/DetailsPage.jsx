// src/pages/DetailsPage.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    Container, Grid, Typography, Button, Dialog,
    DialogTitle, DialogContent, DialogActions, CardMedia, Divider
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import Web3 from 'web3';
import contractArtifact from './LiquorTrading.json';
/**
 * DetailsPage Component
 * This component displays the detailed information of a specific liquor item.
 * It uses React Router's `useParams()` hook to get the product ID from the URL
 * and finds the corresponding liquor from the imported `liquors` data array.
 *
 * It also handles the trading (purchase) process, where:
 * - If the user is not logged in, they are prompted to log in.
 * - If the user has insufficient balance, they are informed and prevented from trading.
 * - If the user has enough balance, they can proceed with the purchase.
 */
export default function DetailsPage() {
    const { id } = useParams();
    console.log('ID from URL:', id);
    const [liquor, setLiquor] = useState(null);
    console.log('Found liquor:', liquor);
    const { user } = useAuth();
    const [open, setOpen] = useState(false);
    const trader = 'Anna Freak';
    const [ethBalance, setEthBalance] = useState(null);

    // Alert user on wallet changed.
    useEffect(() => {
        if (window.ethereum && user) {
            const handleAccountsChanged = (accounts) => {
                const activeWallet = accounts[0];
                if (activeWallet && activeWallet.toLowerCase() !== user.eth_address.toLowerCase()) {
                    alert('You switched wallets! Please make sure you are using the right wallet associated with your account.');
                }
            };
    
            window.ethereum.on('accountsChanged', handleAccountsChanged);
    
            // Cleanup the event listener
            return () => {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
            };
        }
    }, [user]);

    // Fetch the liquor to display its details.
    useEffect(() => {
        async function fetchLiquor() {
            try {
                const response = await axios.get(`http://localhost:3001/api/liquors/${id}`);
                setLiquor(response.data);
            } catch (error) {
                console.error('Error fetching liquor:', error);
            }
        }
        fetchLiquor();
    }, [id]);

    // Fetch ETH balance from MetaMask.
    useEffect(() => {
        const fetchBalance = async () => {
            if (window.ethereum) {
                try {
                    const web3 = new Web3(window.ethereum);
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const account = accounts[0];
                    const balance = await web3.eth.getBalance(account);  // Get balance in Wei.
                    setEthBalance(web3.utils.fromWei(balance, 'ether')); // Convert Wei to ETH.
                } catch (error) {
                    console.error('Error fetching ETH balance:', error);
                }
            } else {
                alert('MetaMask is not installed.');
            }
        };
        fetchBalance();
    }, []);

    /**
	 * handlePurchase Function
	 * - Checks if the user is logged in.
	 * - If yes, deducts the purchase amount from the user's balance.
	 * - Updates the user's transaction history with: purchase time, receiver, liquor purchased, amount deducted from balance.
	 * - Saves the updated user data to localStorage and reloads the page.
	 */
    const handlePurchase = async () => {
        if (!user) return;
    
        if (!window.ethereum) {
            alert('MetaMask is not installed. Please install MetaMask to proceed.');
            return;
        }
    
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const activeWallet = accounts[0];
    
        // Check if the connected wallet matches the user's stored eth_address
        if (activeWallet.toLowerCase() !== user.eth_address.toLowerCase()) {
            alert('The connected wallet does not match your account. Please switch to the correct wallet.');
            return;
        }
    
        const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
        const abi = contractArtifact.abi;
        const contract = new web3.eth.Contract(abi, contractAddress);
    
        try {
            const priceInWei = web3.utils.toWei(liquor.priceETH.toString(), 'ether');
            console.log('Initiating blockchain transaction...');
            await contract.methods.makePurchase(
                liquor.id,
                liquor.name,
                priceInWei,
                user.username,
                user.email
            ).send({ from: activeWallet, value: priceInWei });
            console.log('Blockchain transaction successful.');
            // Prepare transaction data for the backend
            const transactionData = {
                user_id: user.id, // Ensure this is populated
                liquor_id: liquor.id,
                amountETH: liquor.priceETH,
                timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '), // Format timestamp for MySQL
                liquorTrader: trader, // Ensure this is defined
            };

            // Log transaction data for debugging
            console.log('Transaction data:', transactionData);

            // Post the transaction to the backend
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3001/api/users/transactions', transactionData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log('Backend transaction response:', response.data);

            alert('Purchase successful and transaction recorded!');
            setOpen(false);
        } catch (error) {
            console.error('Error during purchase process:', error);

            if (error.response) {
                // Backend error
                console.error('Backend error response:', error.response.data);
                alert(`Purchase failed: ${error.response.data.error}`);
            } else {
                // Other errors (e.g., network issues)
                alert('Purchase failed. Please try again.');
            }
        }
    };

    // If no matching liquor is found, display an error message
    if (!liquor) return <div>Product not found</div>;

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Grid container spacing={4}>
                {/* Left Side: Liquor Image */}
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        image={liquor.image}
                        alt={liquor.name}
                        sx={{
                            height: { xs: 400, sm: 500, md: 600, lg: 800 },
                            objectFit: 'contain',
                            borderRadius: 2
                        }}
                    />
                </Grid>

                {/* Right Side: Liquor Details */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" gutterBottom fontWeight="bold" sx={{ fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' } }}>
                        {liquor.name}
                    </Typography>
                    <Typography variant="h4" color="text.secondary" fontWeight="bold" fontStyle="italic">{liquor.brand}</Typography>
                    <Typography variant="h5" sx={{ mt: 3 }} fontWeight="bold">Background</Typography>
                    <Typography component="p">{liquor.background}</Typography>
                    <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>Production Method</Typography>
                    <Typography component="p">{liquor.makingMethod}</Typography>
                    <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>Brand History</Typography>
                    <Typography component="p">{liquor.brandHistory}</Typography>
                    <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>Suitable For</Typography>
                    <Typography component="p">{liquor.suitableFor}</Typography>
                    <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>Price: ETH{(Number(liquor.priceETH) || 0).toFixed(5)}</Typography>
                    <Typography variant="h5" fontWeight="bold" fontStyle="italic" sx={{ mt: 1 }}>
                        Sold by: {trader}
                    </Typography>

                    {/* Trade Button with Conditional Rendering */}
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={() => setOpen(true)}
                        disabled={!user || (ethBalance !== null && parseFloat(ethBalance) < liquor.priceETH)}
                        sx={{
                            my: 3,
                            fontSize: '1.3rem',
                            border: '2px solid',
                            py: 1,
                            borderRadius: '8px'
                        }}
                    >
                        {
                            !user
                                ? 'Login to Trade'
                                : ethBalance !== null && parseFloat(ethBalance) < liquor.priceETH
                                    ? 'Insufficient Balance to Trade.'
                                    : `Trade with ETH${(Number(liquor.priceETH) || 0).toFixed(5)}`
                        }
                    </Button>
                </Grid>
            </Grid>

            {/* Dialog for Trade Confirmation */}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle variant="h4" fontWeight="bold">Confirm Your Trade</DialogTitle>
                <Divider variant="middle" sx={{ my: 1, borderColor: 'secondary.main' }} />
                <DialogContent>
                    <Typography sx={{ mb: 2 }} variant="h5" fontWeight="bold">
                        {liquor.name} - {liquor.brand}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="secondary">
                        Amount: {`${(Number(liquor.priceETH) || 0).toFixed(5)} ETH`}
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        Current Balance: {ethBalance !== null ? `${parseFloat(ethBalance).toFixed(5)} ETH` : 'Loading...'}
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        Estimated Balance after Purchase (*): {
                            ethBalance !== null && parseFloat(ethBalance) >= liquor.priceETH
                                ? `${(parseFloat(ethBalance) - liquor.priceETH).toFixed(5)} ETH`
                                : 'Insufficient Balance'
                        }
                    </Typography>
                    <Typography variant="h6" fontStyle="italic" fontWeight='bold' sx={{ my: 2 }}>Trade To: {trader}</Typography>
                    <Typography fontStyle="italic" sx={{ fontSize: '1rem', my: 2 }}>
                        (*) Gas Prices (Network Fee) are not included, so the actual price is usually higher than displayed price. Please check your Metamask wallet for the full details of the purchase.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setOpen(false)}
                        sx={{
                            fontSize: '1rem',
                            border: '2px solid',
                            py: { xs: 0.3, md: 0.5 },
                            borderRadius: '8px'
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handlePurchase}
                        color="secondary"
                        sx={{
                            fontSize: '1rem',
                            border: '2px solid',
                            borderColor: 'secondary.main',
                            py: { xs: 0.3, md: 0.5 },
                            borderRadius: '8px'
                        }}
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}