const roleMiddleware = (allowedRole) => {
    return (req, res, next) => {
        if (!allowedRole.includes(req.user.role)) {
            console.log(allowedRole, req.user);
            const roleMessages = {
                admin: "admins only: You are not authorized!",
                customer: "customer only: Access denied!",
                manager: "manager only: Access denied!",
            };
            const message = roleMessages[allowedRole] || "Access forbidden. Insufficient permissions.";
            return res.status(403).json({ message });
        }
        next();
    };
};

export default roleMiddleware;
