function createError(res, status, message, err) {
  return res.status(status || 500).json({
    message: message || "Server Error",
  });
}
export default createError;
