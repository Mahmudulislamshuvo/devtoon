import crypto from "crypto";

const SECRET_KEY = process.env.TOKEN_SECRET_KEY;
const ALGORITHM = "aes-256-cbc";

// 1 from env making the key perfect for AES-256
function getPerfectKey() {
  return crypto.createHash("sha256").update(String(SECRET_KEY)).digest();
}

/**
 * github token encription function, takes the original token and returns an encrypted version to store in the database
 * @param {string} githubToken - my github token that I want to encrypt before saving to the database
 * @returns {string} - the encrypted token that can be safely stored in the database
 */
export function encryptToken(githubToken) {
  try {
    const iv = crypto.randomBytes(16);

    // making the cipher using AES-256-CBC algorithm, the perfect key from env, and the random iv
    const cipher = crypto.createCipheriv(ALGORITHM, getPerfectKey(), iv);

    let encryptedToken = cipher.update(githubToken, "utf8", "hex");
    encryptedToken += cipher.final("hex");

    return `${iv.toString("hex")}:${encryptedToken}`;
  } catch (error) {
    throw new Error("something went wrong during encryption");
  }
}

/**
 * github token decryption function, takes the encrypted token from the database and returns the original token
 * @param {string} encryptedDataFromDB - the encrypted token stored in the database
 * @returns {string} - the original github token
 */
export function decryptToken(encryptedDataFromDB) {
  try {
    const parts = encryptedDataFromDB.split(":");
    const iv = Buffer.from(parts[0], "hex");
    const encryptedText = parts[1];

    // making the decipher using AES-256-CBC algorithm, the perfect key from env, and the iv
    const decipher = crypto.createDecipheriv(ALGORITHM, getPerfectKey(), iv);

    let originalGithubToken = decipher.update(encryptedText, "hex", "utf8");
    originalGithubToken += decipher.final("utf8");

    // if the key is correct, the original token will be returned
    return originalGithubToken;
  } catch (error) {
    // .env এর চাবি ভুল হলে বা পরিবর্তন হয়ে গেলে এখানে চলে আসবে
    console.error("Invalid key! Cannot decrypt the token.");
    return null;
  }
}
