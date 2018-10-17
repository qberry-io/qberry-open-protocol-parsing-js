export class InvalidMessageError extends Error {
    constructor(message) {
        this.message = arguments.length == 0
            ? 'Provided raw message is invalid.' : message;
    }
}