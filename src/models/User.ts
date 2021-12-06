/* eslint-disable no-redeclare */
import mongoose, { Schema } from 'mongoose';

type User = {
  name: string;
  username: string;
  createdAt: Date;
};

const UserSchema = new Schema({
  name: String,
  username: String,
  createdAt: {
    type: 'Date',
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const User = mongoose.model<User>('User', UserSchema);

export { User };
