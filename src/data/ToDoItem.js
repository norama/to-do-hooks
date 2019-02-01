import uuid from 'uuid/v4';

class ToDoItem {

    _text = '';

    _done = false;

    _id = uuid();

    constructor(text, done) {
        this._text = text;
        this._done = done;
    }

    id() {
        return this._id;
    }

    text(text) {
        if (text === undefined) {
            return this._text;
        }
        this._text = text;
        return this;
    }

    done(done) {
        if (done === undefined) {
            return this._done;
        }
        this._done = done;
        return this;
    }
}

export default ToDoItem;