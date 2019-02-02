import uuid from 'uuid/v4';
import moment from 'moment';

class ToDoItem {

    _text = '';

    _done = false;

    // completion time if done,
    // reminder time otherwise
    _datetime = null;

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
        return this.datetime(done ? moment() : null);
    }

    datetime(datetime) {
        if (datetime === undefined) {
            return this._datetime;
        }
        this._datetime = datetime;
        return this;
    }
}

export default ToDoItem;