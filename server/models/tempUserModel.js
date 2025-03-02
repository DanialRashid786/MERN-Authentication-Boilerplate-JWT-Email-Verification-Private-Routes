const mongoose = require("mongoose");

const tempUserSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  verificationToken: String,
  expiresAt: { type: Date, expires: 300 }, // Automatically deletes after 5 minutes
});

module.exports = mongoose.model("TempUser", tempUserSchema);
