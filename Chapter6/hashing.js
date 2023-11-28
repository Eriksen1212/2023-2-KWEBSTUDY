const util = require('util');
const crypto = require('crypto');
const pbkdf2 = util.promisify(crypto.pbkdf2);
const encrypt = async text => {
    const ALGO = 'sha512';
    const KEY_LEN = 64;
    const digest = await pbkdf2(text, '', 1, KEY_LEN, ALGO);
    console.log(digest.byteLength);
    console.log(`${text} | ${digest.toString('base64')}`);
};

(async () => await encrypt('samplepassword'))();
(async () => {
    await encrypt('samplepasswordsamplepasswordsamplepasswordsamplepasswordsample');
    await encrypt('samplepasswordsamplepastwordsamplepasswordsamplepasswordsample');
    })();
    
    const generatePassword = async password => {
        const ALGO = 'sha512';
        const KEY_LEN = 64;
        const salt = await randomBytes(32);
        const iter = Math.floor(Math.random() * 20000) + 200000;
        const digest = await pbkdf2(password, salt, iter, KEY_LEN, ALGO);
        return `${ALGO}:${salt.toString(
        'base64',
        )}:${iter}:${KEY_LEN}:${digest.toString('base64')}`;
        };

(async () => {
    await generatePassword('samplepassword1');
    await generatePassword('samplepassword2');
})();