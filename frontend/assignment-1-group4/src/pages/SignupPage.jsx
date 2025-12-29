// src/pages/SignupPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import axios from "axios";

/**
 * SignupPage Component
 * This component provides a user registration form.
 * It includes basic client-side validation before processing the signup request.
 */
export default function SignupPage() {
    const [formData, setFormData] = useState({
        // Hooks for form data, errors.
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        fullName: ''
    });
    const [ethAddress, setEthAddress] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    // Handle input changes for all form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Connect to MetaMask and capture ETH address
    const handleConnectMetaMask = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setEthAddress(accounts[0]);
            } catch (error) {
                setError('Error connecting to MetaMask: ' + error.message);
            }
        } else {
            setError('MetaMask is not installed.');
        }
    };

    // Handle form submission with validation and MetaMask integration
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!ethAddress) {
            setError('Please connect your MetaMask wallet');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 12) {
            setError('Password must be at least 12 characters long');
            return;
        }

        // Email format validation using regex
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Password complexity validation
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,}$/;
        if (!passwordPattern.test(formData.password)) {
            setError(
                'Password must include at least one uppercase letter, two numbers, and one special character'
            );
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/users/signup', {
                username: formData.username,
                email: formData.email,
                fullName: formData.fullName,
                password: formData.password,
                eth_address: ethAddress
            });
            if (response.status === 201) {
                // Navigate to profile only if the signup is successful
                const { token } = response.data;
                login(token);
                navigate('/profile');
            } else {
                setError('Sign up failed.');
            }
        } catch (err) {
            const message = err.response?.data?.error || 'Sign up failed.';
            setError(message);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Box
                className="filters-container"
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: { xs: 2, md: 4 },
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: { xs: '8px', md: '16px' },
                    gap: 3
                }}
            >
                {/* Page Title */}
                <Typography
                    variant="h3"
                    sx={{
                        color: 'secondary.main',
                        mb: 2
                    }}
                >
                    Create Account
                </Typography>

                {/* Display Error Message */}
                {error && (
                    <Typography
                        color="error"
                        sx={{
                            mb: 2,
                            textAlign: 'center'
                        }}
                    >
                        {error}
                    </Typography>
                )}

                {/* Input Fields */}
                <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    variant="outlined"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />

                <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    variant="outlined"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {/* MetaMask Connection Button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConnectMetaMask}
                    sx={{ mt: 2, fontSize: '1.2rem' }}
                >
                    Connect to your MetaMask wallet
                </Button>
                {ethAddress && <Typography>Connected: {ethAddress}</Typography>}

                {/* Signup Button */}
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    type="submit"
                    sx={{ mt: 2, fontSize: '1.2rem' }}
                >
                    Sign Up
                </Button>

                {/* Link to Login Page */}
                <Typography sx={{ textAlign: 'center' }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: 'var(--secondary-gold)' }}>Log In</Link>
                </Typography>
            </Box>
        </Container>
    );
}