import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  name: { type: String, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'customer' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create the model only if it doesn't exist
let UserModel: Model<IUser>;
try {
  UserModel = mongoose.model<IUser>('User');
} catch (error) {
  UserModel = mongoose.model<IUser>('User', UserSchema);
}

export class UserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email: email.toLowerCase() });
  }

  async create(userData: { email: string, name: string, passwordHash: string }): Promise<IUser> {
    const user = new UserModel({
      email: userData.email.toLowerCase(),
      name: userData.name,
      passwordHash: userData.passwordHash
    });
    return user.save();
  }

  async findById(id: string): Promise<IUser | null> {
    return UserModel.findById(id);
  }
} 