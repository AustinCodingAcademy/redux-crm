//Redux.createStore
//using global variables: reducers, state

const store = Redux.createStore(reducers,state)

ReactDOM.render(<App store={store}/>,document.getElementById("root"));