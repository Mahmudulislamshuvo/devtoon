import jwt from "jsonwebtoken";

const ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || "15m";
const REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "1d";

function parseTimeToMs(timeStr) {
  const value = parseInt(timeStr);
  const unit = timeStr.replace(/[0-9]/g, "").trim().toLowerCase();

  switch (unit) {
    case "s":
      return value * 1000;
    case "m":
      return value * 60 * 1000;
    case "h":
      return value * 60 * 60 * 1000;
    case "d":
      return value * 24 * 60 * 60 * 1000;
    default:
      return value;
  }
}

function getAccessSecret() {
  const secret = process.env.JWT_ACCESS_SECRET;
  if (!secret) throw new Error("Missing access token secret");
  return secret;
}

function getRefreshSecret() {
  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) throw new Error("Missing refresh token secret");
  return secret;
}

export function getAccessTokenExpiry() {
  return Date.now() + parseTimeToMs(ACCESS_EXPIRES_IN);
}

export function getRefreshTokenExpiry() {
  return Date.now() + parseTimeToMs(REFRESH_EXPIRES_IN);
}

export function generateAccessToken(userId) {
  if (!userId) throw new Error("Missing user id");

  return jwt.sign({ sub: String(userId) }, getAccessSecret(), {
    expiresIn: ACCESS_EXPIRES_IN,
  });
}

export function generateRefreshToken(userId) {
  if (!userId) throw new Error("Missing user id");

  return jwt.sign({ sub: String(userId) }, getRefreshSecret(), {
    expiresIn: REFRESH_EXPIRES_IN,
  });
}

export function verifyAccessToken(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, getAccessSecret());
  } catch {
    return null;
  }
}

export function verifyRefreshToken(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, getRefreshSecret());
  } catch {
    return null;
  }
}
