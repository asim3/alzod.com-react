import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controller from "./MVC/Controller";
import * as serviceWorker from './serviceWorker';


Controller.add_to_running({id: 11, 
    name: <a onClick={_ => Controller.test(22)}>click me</a>, show: true})
Controller.add_to_running({id: 22, 
    name: "2index app",show: false})
Controller.add_to_running({id: 33, 
    name: "2home app",show: false})

function App() { 
    console.log(Controller.running)    
    return Controller.Show_root()
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();