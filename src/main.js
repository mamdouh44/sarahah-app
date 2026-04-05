import './Config/env.config.js';
import express from "express"
import envConfig from './Config/env.config.js';
import dbConnection from './DB/db.connection.js';
import {globalErrorHandler} from './Middlewares/index.js';
import * as controllers from './Modules/index.js'

const app = express();
const port = envConfig.app.PORT;
dbConnection()
app.use(express.json())
app.use('/api/auth', controllers.authController)
app.use('/api/user', controllers.userController)
app.use('/api/message', controllers.messageController)

app.get('/', (req, res)=>{
    res.send("sarahah app is running")
})

app.use((req, res, next)=>{
    res.status(404).json({
        message: "Route not found"
    })
})

app.use(globalErrorHandler)
app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`);
    
})