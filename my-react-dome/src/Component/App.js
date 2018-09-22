import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './home'
import './app.css'
import Detail from './detail'
import './app.css'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Router>
                <div>
                <Route exact path='/' component={Home}></Route>
                <Route path='/detail' component={Detail}></Route>
                </div>
            </Router>


        )
    }
}