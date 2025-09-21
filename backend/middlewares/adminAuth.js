import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({success: false, message: 'No token provided' });
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({success: false, message: 'Invalid token' });
        }
        req.user = token_decode;
        next();
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal server error' });
    }
}
export default adminAuth;
    