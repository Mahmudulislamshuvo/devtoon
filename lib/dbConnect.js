import mongoose from "mongoose";

const MONGO_URL = process.env.MONGODB_URI;

// Use global object for caching in serverless environments (Vercel).
// Module-level variables reset between cold starts; global persists within
// the same function instance and also prevents duplicate connections in dev.
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGO_URL) {
    throw new Error(
      "Please define the MONGODB_URI environment variable in .env",
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URL, {
        dbName: "devtoon",
        bufferCommands: false,
        maxPoolSize: 10,
      })
      .then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
};
