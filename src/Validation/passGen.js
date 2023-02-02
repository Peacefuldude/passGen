export const passGen = (length, power) => {

    var password = "";

    // Password modes
    // normal only has English alphabet
    const normal = "abcdefghijklmnopqrstuvwxyz";
    // strong has numbers and english alphabet
    const strong = "0123456789abcdefghijklmnopqrstuvwxyz";
    // super strong has numbers, english alphabet and signs
    const superStrong = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // god mode is like the super strong but its double the size
    const godPassword = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Generator
    if (power === 'normal') {
        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * normal.length);
            password += normal.substring(randomNumber, randomNumber +1);
        }
    }

    if (power === 'strong') {
        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * strong.length);
            password += strong.substring(randomNumber, randomNumber +1);
        }
    }

    if (power === 'superstrong') {
        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * superStrong.length);
            password += superStrong.substring(randomNumber, randomNumber +1);
        }
    }

    if (power === 'godmode') {
        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * godPassword.length);
            password += godPassword.substring(randomNumber, randomNumber +1);
        }
    }

    return password;

}