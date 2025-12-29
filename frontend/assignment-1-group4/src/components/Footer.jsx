// src/components/Footer.jsx
import { Box, Typography, IconButton } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';

/**
 * Footer Component
 * This component displays the footer section of the website, including:
 * - Copyright
 * - Current year and brand name.
 * - A link to our GitHub repository with an interactive icon and label.
 * The design is responsive, adapting to different screen sizes using MUI.
 */
export default function Footer() {
    return (
        // Container for the footer content
        <Box
            sx={{
                bgcolor: 'var(--primary-dark)',
                py: 1,
                px: 1,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 1,
                transition: 'all 0.3s ease',
            }}
        >
            {/* Copyright Text */}
            <Typography color="var(--secondary-gold)" variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                <CopyrightIcon sx={{ verticalAlign: 'middle', mr: 0.5, fontSize: '1rem' }} />
                {new Date().getFullYear()} ELITE SPIRITS. All rights reserved.
            </Typography>

            {/* GitHub Link with Icon */}
            <Box
                component="a"
                href="https://github.com/COS30049-SUVHN/group-project-spr-2025-g4/tree/main/backend"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                <IconButton
                    aria-label="GitHub repository"
                    sx={{
                        color: 'var(--secondary-gold)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            color: 'var(--hover-gold)',
                            transform: 'rotate(360deg) scale(1.2)',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <GitHubIcon sx={{ fontSize: '1.8rem' }} />
                </IconButton>
                <Typography variant="h6" color="var(--secondary-gold)" sx={{ ml: 1, display: { xs: 'none', md: 'block' } }}>
                    Distillers
                </Typography>
            </Box>
        </Box>
    );
}