import { User } from "../../DB/Models/index.js";
import { decrypt } from "../../Common/index.js";


export const getProfileService = async (id) =>{
    const user = await User.findById(id);
    if(user.phoneNumber){
        user.phoneNumber = decrypt(user.phoneNumber);
    }
    return user;

}