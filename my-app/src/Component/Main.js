import React,{Component} from 'react';
import {
    BrowserRouter as Router,Route,Link,Switch,
    Redirect,
    Prompt,
    NavLink
}
from 'react-router-dom';
import A from './A';
import B from './B';
import Home from './Home';
import Children from "./Children";
const Jump=(props)=>{
    console.log(props);
    return <Link to={props.to}>jump</Link>
};

const X = (props) => {
    return (
        <div>
            <button
            onClick={()=>{
                props.history.push('/')
            }
                }
            >click</button>
    </div>
    )
};


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    render(){
        return (
            <div>
                Main主页面
                <Router>
                     <div>
                            <Link to='/'>首页</Link>
                                 ----
                            <Link to='/a'>转换a</Link>
                                 ----
                            <Link to='/b/5'>转换b</Link>
                                 ---
                            <Link to="/render">render</Link>
                                    ---
                            {/*<NavLink to="/children/6" activeClassName='selected'>children</NavLink>*/}
                              <NavLink to="/children/6" activeStyle={{
                                  color:'red',
                                  fontSize:40
                              }}>children</NavLink>
                         ---
                         <Jump to='/'></Jump>
                         ---
                         <Link to='/x'>编程式导航</Link>


                         ----
                                 {/* <Switch>
                                    <Route path="/a" component={PageA}></Route>
                                    <Route path="/b" component={PageB}></Route>
                                    <Route path="/" component={Home}></Route>
                                </Switch> */}
                            <Route exact path='/' component={Home}></Route>
                            <Route path='/a' component={A}></Route>
                            <Route path="/b/:num" component={B}></Route>
                            <Route path='/render' render={()=>{
                                // return <h1>aaa</h1>
                                return <Redirect to='/b/9'></Redirect>
                            }}></Route>
                            <Route path="/children/:num" children={Children}></Route>

                            <Route path='/x' component={X}></Route>
                            <Prompt when={this.state.show} message='dsgsagasgagasge'></Prompt>
                     </div>
                </Router>
            </div>
        );
    }
}
export default Main