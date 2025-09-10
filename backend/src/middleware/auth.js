const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
   const token = req.cookies.token;
   if (!token) return res.status(401).json({ error: 'Missing token' })

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload; // { id, role, name }
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid or expired token' });
  
    }
}

const requireAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin'){
        return res.status(403).json({error: 'admin only'})
    }
    next();
}

module.exports = { requireAuth, requireAdmin }