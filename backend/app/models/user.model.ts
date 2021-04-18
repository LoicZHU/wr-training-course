import * as mongoose from "mongoose";
import {Document, Schema, HookNextFunction} from "mongoose";
import * as argon2 from 'argon2';

export interface IUser extends Document {
  email: string,
  password: string,
}

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

userSchema.pre<IUser>('save', async function(next: HookNextFunction) {
  try {
    const hash = await argon2.hash(this.password, {type: argon2.argon2id})
    this.password = hash;
    next()
  } catch (err) {
    return next(err)
  }
})

export const User = mongoose.model<IUser>('user', userSchema)