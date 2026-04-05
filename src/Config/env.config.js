import { config } from "dotenv";

config({path:[`.${process.env.NODE_ENV}.env`, '.env']});

const envConfig = {
    app:{
        NODE_ENV: process.env.NODE_ENV ?? 'dev',
        PORT: process.env.PORT ?? 8000
    },
    database:{
        MONGO_URI: process.env.MONGO_URI 
    },
    encryption:{
        ENCRYPTION_KEY: process.env.ENC_KEY ?? 'default_encryption_key'
    }
    };

export default envConfig;