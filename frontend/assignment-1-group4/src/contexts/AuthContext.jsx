/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(undefined);

/**
 * AuthProvider Component
 * This context provider handles authentication state using JWT tokens from the backend:
 * - `user`: Stores the current logged-in user information fetched from the backend.
 * - `token`: Stores the JWT token in localStorage and state.
 * - `login(newToken)`: Sets the token and triggers user data fetch.
 * - `logout()`: Clears the token and user data.
 *
 * The state persists across page refreshes via localStorage, and user data is fetched
 * whenever the token changes, ensuring real-time updates across components.
 */
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    /**
     * useEffect Hook
     * - Fetches user data from the backend whenever the token changes.
     * - Clears user data if the token is invalid or removed.
     */
    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                try {
                    const response = await axios.get('http://localhost:3001/api/users/profile', {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    setUser(response.data);
                } catch (error) {
                    if (error.response?.status === 401) {
                        localStorage.removeItem('token');
                        setToken(null);
                        setUser(null);
                    }
                }
            } else {
                setUser(null);
            }
        };
        fetchUser();
    }, [token]);

    /**
     * login Function
     * - Accepts a JWT token from the backend and updates state and localStorage.
     * @param {string} newToken - The JWT token received from login/signup
     */
    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    /**
     * logout Function
     * - Clears authentication state and localStorage.
     */
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

/**
 * useAuth Hook
 * - Provides access to authentication state and methods.
 * @returns {Object} Authentication state and methods (user, token, login, logout)
 */
export const useAuth = () => useContext(AuthContext);