import mongoose from "mongoose";

const commitItemSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    date: { type: String, default: "" },
  },
  { _id: false },
);

const commitCacheSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    repoName: { type: String, required: true },
    cleanCommits: [commitItemSchema],
  },
  { timestamps: true },
);

// একই user এর একই repo এর জন্য duplicate এন্ট্রি যেন না হয়
commitCacheSchema.index({ userId: 1, repoName: 1 }, { unique: true });

const CommitCache =
  mongoose.models.CommitCache ||
  mongoose.model("CommitCache", commitCacheSchema);

export default CommitCache;
