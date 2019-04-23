export class InvalidMessageError extends Error {
    constructor(message) {
        super(message);
        this.message = arguments.length == 0
            ? 'Provided raw message is invalid.' : message;
    }
}