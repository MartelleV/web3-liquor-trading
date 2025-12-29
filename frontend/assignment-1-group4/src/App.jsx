// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MyShop from './pages/MyShop';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import Footer from './components/Footer';
import DetailsPage from "./pages/DetailsPage";
import './App.css'

// Get index.css variables
const rootStyles = getComputedStyle(document.documentElement);

// Create a custom MUI theme to ensure a consistent design.
const theme = createTheme({
	// Font
	typography: {
		fontFamily: '"Crimson Pro", serif',
	},

	// Color palette
	palette: {
		primary: { main: rootStyles.getPropertyValue('--primary-dark').trim() },
		secondary: { main: rootStyles.getPropertyValue('--secondary-gold').trim() },
		background: { default: rootStyles.getPropertyValue('--accent-light').trim() },
	},

	// Component styling
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
					padding: '12px 24px',
					transition: 'all 0.3s ease',
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: '16px',
					overflow: 'hidden',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: '8px',
						background: 'white',
					},
				},
			},
		},
	},
});


/**
 * Main App Component
 * Handles routing and wraps the application with authentication and theming context.
 */
export default function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Navigation />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<MyShop />} />
						<Route path="/collection/:id" element={<DetailsPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/profile" element={<ProfilePage />} />
					</Routes>
					<Footer />
				</Router>
			</ThemeProvider>
		</AuthProvider>
	);
}
