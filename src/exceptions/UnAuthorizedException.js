class UnAuthorizedException extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnAuthorizedException';
        this.statusCode = 401;
    }
}

module.exports = UnAuthorizedException;