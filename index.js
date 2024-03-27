function u_id() {
    const timestamp = new Date().getTime();
    const randomNum = Math.random().toString(36).substr(2, 9);

    return `${timestamp}_${randomNum}`;
}

module.exports = u_id