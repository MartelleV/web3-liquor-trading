// src/pages/MyShop.jsx
import { useEffect, useState } from 'react';
import { Container, Grid, TextField, Autocomplete, Slider, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

/**
 * MyShop Component
 * This component renders the shop page where users can browse and filter spirits.
 */
export default function MyShop() {
    // State hooks for filters
	const [searchTerm, setSearchTerm] = useState(''); // Search filter hook.
	const [selectedType, setSelectedType] = useState(null); // Type filter hook.
	const [priceRange, setPriceRange] = useState([0, 2]); // Range filter hook.
	const [liquors, setLiquors] = useState([]); // Store liquors fetched from backend

    // Fetch liquors data from backend
    useEffect(() => {
        async function fetchLiquors() {
            try {
                const response = await axios.get('http://localhost:3001/api/liquors');
                setLiquors(response.data);
            } catch (error) {
                console.error('Error fetching liquors:', error);
            }
        }
        fetchLiquors();
    }, []);

    // Extracting unique liquor types for the filter
    const types = [...new Set(liquors.map((liquor) => liquor.type))];

    /**
	 * Filtering logic for liquors:
	 * - Matches search term with name or brand (case-insensitive)
	 * - Matches selected type if any
	 * - Matches the selected price range
	 */
    const filteredLiquors = liquors.filter((liquor) => {
        const matchesSearch = liquor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            liquor.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = !selectedType || liquor.type === selectedType;
        const matchesPrice = liquor.priceETH >= priceRange[0] && liquor.priceETH <= priceRange[1];
        return matchesSearch && matchesType && matchesPrice;
    });

    return (
        <Container maxWidth="xl" sx={{
            py: 4,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
        }}>
            {/* Page Title */}
            <Typography variant="h3" gutterBottom sx={{ mb: 4, color: 'secondary.main' }}>
                Premium Spirits Collection
            </Typography>

            {/* Filters Section */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
                {/* Search by Name or Brand */}
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Search Spirits"
                        variant="outlined"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Grid>

                {/* Filter by Type */}
                <Grid item xs={12} md={4}>
                    <Autocomplete
                        options={types}
                        renderInput={(params) => <TextField {...params} label="Filter by Type" />}
                        onChange={(_, value) => setSelectedType(value)}
                    />
                </Grid>

                {/* Filter by Price Range */}
                <Grid item xs={12} md={4}>
                    <Typography gutterBottom>Price Range (in ETH)</Typography>
                    <Slider
                        value={priceRange}
                        onChange={(_, newValue) => setPriceRange(newValue)}
                        valueLabelDisplay="auto"
                        min={0}
                        max={2}
                        step={0.001}
                        sx={{ color: 'secondary.main' }}
                    />
                </Grid>
            </Grid>

            {/* Product Cards Grid */}
            <Grid container spacing={4}>
                {filteredLiquors.map((liquor) => (
                    <Grid item key={liquor.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard liquor={liquor} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}