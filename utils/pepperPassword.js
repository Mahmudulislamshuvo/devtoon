import bcrypt from "bcryptjs";
import crypto from "crypto";

const pepperPasword = async (password) => {
  const PEPPER = process.env.PASSWORD_PEPPER;

  return crypto.createHmac("sha256", PEPPER).update(password).digest("hex");
};

const comparePepperedPassword = async (plainPassword, dbHashedPassword) => {
  const pepperedPassword = await pepperPasword(plainPassword);

  return bcrypt.compare(pepperedPassword, dbHashedPassword);
};

export { comparePepperedPassword, pepperPasword };
