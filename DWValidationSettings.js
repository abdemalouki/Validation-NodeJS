//======================================================
const crypto = require("crypto")


function decrypt(encryptedPassword) {
    const algorithm = 'aes-256-cbc';
    const key = Buffer.from('12345678901234567890123456789012'); // Clave fija de 32 bytes
    const iv = Buffer.from('1234567890123456'); // IV fijo de 16 bytes
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


exports.fieldNameCONTACT        = 'CONTACT';
exports.fieldDOCUMENTDATE       = 'DOCUMENT_DATE';
//CONNECTION TO DOCUWARE SYSTEM
exports.DWPlatformUrl           = 'https://testabdessamad2.docuware.cloud/DocuWare/Platform';
exports.DWPlatformOrganization  = 'testabdessamad2';
exports.DWPlatformUser          = 'abdessamadelmallouki.admin';
exports.DWPlatfromPassword      = decrypt("f9f1244a07ffd15f07bc6bf58461b0cb")


//TRIGGER WORDS FOR DETECTING INVOICES & QUOTES (not case sensitive)
exports.DWSearchDialogGUIDForInvoiceSearch      = '1db12f75-fd1e-4207-9ab1-7564c6c82533';
//======================================================