import * as cipher from "./modules/cipher.js";

// cipher.encryptFile("aes-256-gcm","kaguya.mkv",256,16)

cipher.decryptFile('kaguya.mkv.enc','kaguya.mkv.key')