import { User } from "../../DB/Models/index.js";
import { compare, encrypt, hash } from "../../Common/index.js";


export const registerService = async (body)=>{
    const {firstName, lastName, email, password, gender, phone} = body;

    const checkEmailDuplication = await User.findOne({email}).select("email");

    if(checkEmailDuplication){
        throw new Error("Email already exists", {cause: {status: 409}});
    }
    const hashedPassword = await hash(password);

    const userObject = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        gender
    }

    if(phone){
        userObject.phoneNumber = encrypt(phone);
    }
    return User.create(userObject);
}


//login api
export const loginService = async (body)=>{
    const {email, password} = body;
    const user = await User.findOne({email});
    if(!user){
        throw new Error("Invalid email or password", {cause: {status: 401}});
    }
    const isPasswordValid = await compare(password, user.password);
    console.log(isPasswordValid);
    
    if(!isPasswordValid){
        throw new Error("Invalid email or password", {cause: {status: 401}});
    }
    return user;
}