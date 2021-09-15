import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    title: String,
    category: String,
    tags: String,
    date: String,
    description: String,
  });