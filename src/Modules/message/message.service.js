import messageRepository from "../../DB/Repositories/message.repository.js";


export const sendMessage = (body)=>{
    const {content, receiverId} = body;
    return messageRepository.createDocument({content, receiverId});
}

export const listMyMessages = (userId)=>{
    return messageRepository.findDocuments({receiverId: userId})
}