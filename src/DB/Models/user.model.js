import mongoose from "mongoose";
import { GENDER, STATUS, USER_ROLES } from "../../Common/index.js";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, 'first name must be at least 3 characters long'],
        maxLength: [50, 'first name must be less than 50 characters long']
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, 'last name must be at least 3 characters long'],
        maxLength: [50, 'last name must be less than 50 characters long']
    },
    email: {
        type: String,
        required: true,
        index:{
            unique: true,
            name: 'email_unique'
        }
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: Object.values(USER_ROLES)
    },
    gender: {
        type: String,
        enum: Object.values(GENDER)
    },
    status: {
        type: String,
        enum: Object.values(STATUS),
        default: STATUS.ACTIVE
    },
    phoneNumber: String
},
{
    toJSON: {getters: true},
    toObject: {getters: true},
    timestamps: true
})

userSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;