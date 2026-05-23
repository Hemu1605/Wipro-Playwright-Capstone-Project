function generateEmail() {

    return `hemu${Date.now()}@gmail.com`;
}

module.exports = {
    generateEmail
};