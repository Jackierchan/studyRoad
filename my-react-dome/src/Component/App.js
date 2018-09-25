import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './home'
import '../asset/css/app.css'
import Detail from './detail'

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