// src/pages/LoginPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import axios from "axios";
import { useAuth } from '../contexts/AuthContext';

/**
 * LoginPage Component
 * This component renders the login form for users.
 * It includes basic validation and uses the AuthContext for authentication.
 */
export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    /**
     * handleSubmit - Handles form submission and validation
     * @param {Object} e - Event object from form submission
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic validation for password
        if (password.length < 12) {
            setError('Password must be at least 12 characters long');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/users/login', {
                username,
                password
            });
            if (response.status === 200) {
                const { token } = response.data;
                login(token);
                navigate('/profile');
            } else {
                setError('Login failed.');
            }
        } catch (err) {
            const message = err.response?.data?.error || 'Login failed.';
            setError(message);
        }
    };

    return (
        <Container maxWidth="sm" sx={{
            py: { xs: 4, md: 8 },
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box
                className="filters-container"
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: { xs: 2, md: 4 },
                    gap: 3
                }}
            >
                {/* Page Title */}
                <Typography variant="h3" sx={{ mb: 3, color: 'secondary.main' }}>Welcome Back</Typography>

                {/* Error Message Display */}
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
                    label="Username"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {/* Submit Button */}
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    type="submit"
                    sx={{ fontSize: '1.2rem' }}
                >
                    Log In
                </Button>

                {/* Redirect to Signup Page */}
                <Typography sx={{ mt: 2, textAlign: 'center' }}>
                    Do not have an account? <Link to="/signup" style={{ color: 'var(--secondary-gold)' }}>Sign Up</Link>
                </Typography>
            </Box>
        </Container>
    );
}