import mongoose from "mongoose"
import envConfig from "../Config/env.config.js"

const database = envConfig.database
const dbConnection =  async () =>{
    try{
        await mongoose.connect(database.MONGO_URI)
        console.log('Database connection successful')
    } catch (error) {
        console.error('Database connection failed:', error)
    }
}
export default dbConnection