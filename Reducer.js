class Reducer {
    static getInstance() {
        let reducer = new this();

        return (state = reducer.getInitialState(), action)  => {
            const actionHandler = reducer.getTypeHandlers()[action.type];

            return (actionHandler) ? actionHandler(state, action.payload) : state;
        };
    }

    getInitialState() {
        return {};
    }

    getTypeHandlers() {
        return {};
    }
}

module.exports = Reducer;
