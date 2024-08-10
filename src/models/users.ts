import { model, Schema, Document, Types } from "mongoose"

interface IUser extends Document {
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    bio?: string;
    dp?: string;
    followers: Types.ObjectId[];
    following: Types.ObjectId[];
    createdAt: Date;
    lastActive: Date;
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        default: '',
        trim: true,
    },
    dp: {
        type: String,
        default: '',  // TBD - You can modify this later based on the implementation
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastActive: {
        type: Date,
        default: Date.now,
    },
});

const User = model<IUser>('User', userSchema);

export default User;