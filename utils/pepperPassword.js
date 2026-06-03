import bcrypt from "bcryptjs";
import crypto from "crypto";

// for  hashing the password with pepper before bcrypt hashing
const pepperPasword = async (password) => {
  const PEPPER = process.env.PASSWORD_PEPPER;

  return crypto.createHmac("sha256", PEPPER).update(password).digest("hex");
};

// for comparing the peppered password with the hashed password in the database (Login)
const comparePepperedPassword = async (plainPassword, dbHashedPassword) => {
  const pepperedPassword = await pepperPasword(plainPassword);

  return bcrypt.compare(pepperedPassword, dbHashedPassword);
};

export { comparePepperedPassword, pepperPasword };
