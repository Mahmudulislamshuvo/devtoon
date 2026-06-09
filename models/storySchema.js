import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  chapterTitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  chapterCover: {
    type: String,
    default: null,
  },
});

const storySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    repoName: {
      type: String,
      required: true,
    },
    storyType: {
      type: String,
      required: true,
    },
    coverPhoto: {
      type: String,
      default: null,
    },
    story: [chapterSchema],
  },
  {
    timestamps: true,
  },
);

const Story = mongoose.models.Story || mongoose.model("Story", storySchema);

export default Story;
