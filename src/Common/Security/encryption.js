import crypto from 'node:crypto';
import envConfig from '../../Config/env.config.js';

const encryptionEnv = envConfig.encryption;
const encryptionKey = Buffer.from(encryptionEnv.ENCRYPTION_KEY, 'hex');

export const encrypt = (plainText)=>{
    const iv = crypto.randomBytes(parseInt(encryptionEnv.IV_LENGTH));
    const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
    let encrypted = cipher.update(plainText, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}

export const decrypt = (inputCipher)=>{
    const [iv, encrypted] = inputCipher.split(':');
    const bufferedIv = Buffer.from(iv, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, bufferedIv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}