# opensupports-redux-classes

This is an utility for having reducers as classes in a Redux architecture.

## Usage
```
const { Reducer } = require('opensupports-redux-classes');

class MyReducer extends Reducer {
    getInitialState() {
        return {
            opened: false
        };
    }

    getTypeHandlers() {
        return {
            'OPEN': this.handleOpen.bind(this),
            'CLOSE': this.handleClose.bind(this)
        };
    }

    handleOpen(state) {
        return {
            ...state,
            opened: true
        };
    }

    handleClose(state) {
        return {
            ...state,
            opened: false
        };
    }
}

module.exports = MyReducer.getInstance();
```

This will export a reducer that:
* Its initial state is `opened: false`
* When `'OPEN'` action happens, it replaces the state it with `opened: true`
* When `'CLOSE'` action happens, it replaces the state it with `opened: false`
