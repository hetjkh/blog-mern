import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  mainImage: {
    public_id: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    },
  },
  intro: {
    type: String,
    required: false,
    minLength: [250, "Blog intro must contain at least 250 characters!"],
  },
  paraOneImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraOneDescription: {
    type: String,
  },
  paraOneTitle: {
    type: String,
  },
  paraTwoImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraTwoDescription: {
    type: String,
  },
  paraTwoTitle: {
    type: String,
  },
  paraThreeImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraThreeDescription: {
    type: String,
  },
  paraThreeTitle: {
    type: String,
  },
  category: {
    type: String,
    required: false
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false
  },
  authorName: {
    type: String,
    required: false
  },
  authorAvatar: {
    type: String,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

export const Blog = mongoose.model("Blog", blogSchema);