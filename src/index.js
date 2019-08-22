//Redux.createStore

let reducers = Redux.combineReducers({
    customers,
    // customer, searchBar
})

store = Redux.createStore(reducers, state);

ReactDOM.render(<App />,document.getElementById("root"));