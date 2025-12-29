// src/pages/HomePage.jsx
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import heroBackground from '/assets/hero.jpeg';

/**
 * HomePage Component
 * This is the landing page for the Premium Spirits Marketplace.
 * It showcases a hero section with a background image, a title, a subtitle,
 * and a call-to-action button to navigate to the Shop page.
 */
export default function HomePage() {
    return (
        <Box
            sx={{
                minHeight: { xs: '85vh', sm: '90vh', md: '93vh' },
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    py: { xs: 10, md: 15 },
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                {/* Main Heading */}
                <Typography
                    variant="h1"
                    gutterBottom
                    sx={{
                        color: 'secondary.main',
                        fontWeight: 'bold',
                        fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                        lineHeight: { xs: 1.2, md: 1.3 }
                    }}
                >
                    Premium Spirits Marketplace
                </Typography>

                {/* Subheading */}
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                        mb: { xs: 3, md: 4 },
                        fontWeight: 300
                    }}
                >
                    Trade Rare & Collectible Liquors Securely
                </Typography>

                {/* Call-to-Action button */}
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    to="/shop"
                    sx={{
                        padding: '1rem 2.5rem',
                        textTransform: 'none',
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: 'var(--primary-dark)',
                            color: 'var(--hover-gold)',
                            transition: '0.3s ease',
                        },
                    }}
                >
                    Explore
                </Button>
            </Container>
        </Box>
    );
}