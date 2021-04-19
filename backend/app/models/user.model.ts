import * as mongoose from "mongoose";
import {Document, Schema, HookNextFunction} from "mongoose";
import * as argon2 from 'argon2';
import {verify} from 'argon2';

// interfaces
export interface IUser extends Document {
  email: string,
  password: string,
}

export interface IUserBaseDocument extends IUser {
  checkPassword(givenPassword: string): Promise<boolean>,
}

// schema
const userSchema: Schema<IUserBaseDocument> = new Schema(
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

// hash password before saving (when User.create())
userSchema.pre<IUser>('save', async function(next: HookNextFunction): Promise<void> {
  try {
    // docs: https://github.com/ranisalt/node-argon2#readme | https://www.npmjs.com/package/argon2
    const hash: string = await argon2.hash(this.password, {type: argon2.argon2id})
    this.password = hash;
    return next()
  } catch (err) {
    return next(err)
  }
});

// custom method on the userSchema to check the password given by a user
userSchema.methods.checkPassword = async function(givenPassword): Promise<boolean> {
  const hash: string = this.password;
  return await verify(hash, givenPassword);
}

export const User = mongoose.model<IUserBaseDocument>('user', userSchema)