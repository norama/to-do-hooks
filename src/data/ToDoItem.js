import uuid from 'uuid/v4';
import moment from 'moment';

class ToDoItem {

    _text = '';

    _done = false;

    // completion time if done,
    // reminder time otherwise
    _datetime = null;

    _id = uuid();

    constructor(text, done=false, datetime=null) {
        this._text = text;
        this._done = done;
        this._datetime = datetime;
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
        return new ToDoItem(this._text, done, done ? moment() : null);
    }

    datetime(datetime) {
        if (datetime === undefined) {
            return this._datetime;
        }
        return new ToDoItem(this._text, this._done, datetime);
    }

    reminder() {
        return this.done() ? null : this.datetime();
    }
}

export default ToDoItem;