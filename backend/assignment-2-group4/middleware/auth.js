import jwt from 'jsonwebtoken';

/**
 * Authenticate JWT token from Authorization header
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Authentication required' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid or expired token' });
        req.userId = user.userId;
        next();
    });
}

export default authenticateToken;