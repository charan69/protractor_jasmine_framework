import 'jasmine';
/**
    * @param {number} length number of characters to be returned
    * @param {string} type type of string to be returned
    */
export const Helpers = {
    randomString(length, type) {
        let text = '';
        let chars = '';
        switch (type) {
            case 'letters':
                chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                break;
            case 'numerals':
                chars = '0123456789';
                break;
            case 'alphanumeric':
                chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                break;
            default:
                chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.;!@#$%&*+-?';
                break;
        }
        for (let i = 0; i < length; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return text;
    },
};
//# sourceMappingURL=Helpers.js.map