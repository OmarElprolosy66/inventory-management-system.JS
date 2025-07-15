export const err = (err, req, res, next) => {
    if (err) {
        console.error(err);
        return res.status(500).json({ message: err.message || "Internal Server Error" });
    }
    next();
};