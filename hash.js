const crypto = require('crypto');

// Configuración del cifrado
const algorithm = 'aes-256-cbc';
const key = Buffer.from('12345678901234567890123456789012'); // Clave fija de 32 bytes
const iv = Buffer.from('1234567890123456'); // IV fijo de 16 bytes

// Función para cifrar
function encrypt(password) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Función para descifrar
function decrypt(encryptedPassword) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Función para comparar contraseñas
function comparePasswords(inputPassword, storedEncryptedPassword) {
    const encryptedInput = encrypt(inputPassword); // Cifrar la entrada del usuario
    return encryptedInput === storedEncryptedPassword; // Comparar los resultados
}

// Simulación
(async () => {
    try {
        // Contraseña original para cifrar y almacenar
        const originalPassword = '12345678';
        const encryptedPassword = encrypt(originalPassword);
        console.log('Contraseña cifrada para almacenar:', encryptedPassword);

        // Comparar con una contraseña introducida por el usuario
        const userInput = '123456'; // Contraseña introducida por el usuario
        const isMatch = comparePasswords(userInput, encryptedPassword);

        if (isMatch) {
            console.log('¡Contraseña correcta!');
            // Descifrar la contraseña almacenada
            const decryptedPassword = decrypt("416c9b9a72b9c2bf3fbb46a410a16f55");
            console.log('Contraseña descifrada:', decryptedPassword);
        } else {
            console.log('Contraseña incorrecta.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
