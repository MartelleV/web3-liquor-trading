// src/components/Navigation.jsx
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
    const { user } = useAuth();

    return (
        <AppBar position="sticky" className="navbar" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h6" className="logo" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ color: 'var(--secondary-gold)', textDecoration: 'none' }}>
                            ELITE SPIRITS
                        </Link>
                    </Typography>

                    <Button className="navButton" color="inherit" component={Link} to="/shop" sx={{ mx: 2 }}>
                        Shop
                    </Button>

                    {user ? (
                        <>
                            <Button className="navButton" color="inherit" component={Link} to="/profile" sx={{ mx: 2 }}>
                                {user.username}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button className="navButton" color="inherit" component={Link} to="/login" sx={{ mx: 2 }}>
                                Login
                            </Button>
                            <Button className="navButton" color="inherit" component={Link} to="/signup" sx={{ mx: 2 }}>
                                Sign Up
                            </Button>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}