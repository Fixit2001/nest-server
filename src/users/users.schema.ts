import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    secondName: String,
    email: String,
    password: String,
  });