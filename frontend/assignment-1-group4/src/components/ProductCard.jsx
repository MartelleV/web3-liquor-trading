/* eslint-disable react/prop-types */
// src/components/ProductCard.jsx
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * ProductCard Component
 * This component displays individual product cards for liquors, including:
 * - Product image
 * - Liquor type, brand, and name
 * - Price displayed in ETH with formatting
 * - A 'View Details' button linking to the product's detail page
 * This component is designed to be reusable for displaying products in a grid or list format.
 */
export default function ProductCard({ liquor }) {
    return (
        <Card className="product-card">
            {/* Product Image */}
            <CardMedia
                component="img"
                className="product-image"
                image={liquor.image}
                alt={liquor.name}
            />

            {/* Product Information */}
            <CardContent sx={{ py: 3 }}>
                <Typography variant="h7" color="text.secondary">
                    {liquor.type}
                </Typography>
                <Typography variant="h5" sx={{ my: 1 }}>
                    {liquor.brand}
                </Typography>
                <Typography variant="h7" fontWeight="bold" color="text.secondary" fontStyle="italic">
                    {liquor.name}
                </Typography>
                <Typography variant="h6" color="secondary.main">
                    ETH{(Number(liquor.priceETH) || 0).toFixed(5)}
                </Typography>
            </CardContent>

            {/* View Details Button */}
            <Button
                component={Link}
                to={`/collection/${liquor.id}`}
                variant="contained"
                color="secondary"
                fullWidth
                sx={{
                    fontSize: '1.1rem',
                    borderRadius: '2px',
                    py: 2
                }}
            >
                View Details
            </Button>
        </Card>
    );
}