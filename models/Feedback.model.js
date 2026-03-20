import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    points: {
      type: Number,
      required: true,
      max: [5, "Rating can not exceed 5"],
      min: [1, "Rating must be at least 1"],
    },
    feedback: {
      type: String,
      required: true,
      maxLength: [300, "can not have more than 300 characters"],
      minLength: [50, "Can not have less than 50 characters"],
      trim: true,
    },
  },
  { timestamps: true },
);

export const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
