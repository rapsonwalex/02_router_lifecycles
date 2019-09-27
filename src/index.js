import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'

//COMPONENTS
import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';
import PostItem from './components/post_item';
import Life from './components/life';
import Conditional from './components/conditional.js';
import User from './components/user.js';



const App = () =>{
    return (
        
      <BrowserRouter>
            <div>
                <header>
                  <NavLink to="/">Home</NavLink><br/>
                  <NavLink 
                  to="/posts"
                  activeStyle={{color:'red'}}
                  activeClassName="selected"
                  >Post</NavLink><br/>
                  <NavLink to={{
                      pathname:'/profile'
                  }}>Profile</NavLink><br/>
                  <NavLink to="/life">Life</NavLink><br/>
                  <NavLink to="/conditional">Conditional</NavLink><br/>
                  <NavLink to="/user">User</NavLink><br/>
                  <hr></hr>
                </header>
                <Switch>
                    <Route path="/posts/:id/:username" component={PostItem}/>
                    <Route path="/posts" exact component={Posts}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/life" component={Life}/>
                    <Route path="/conditional" component={Conditional}/>
                    <Route path="/user" component={User}/>
                    <Route path="/" exact component={Home}/>
                    {/* <Route render={()=> <h3>OOPS 404</h3>}/> */}
                    <Route component={Posts}/>
                </Switch>
            
             </div>
      </BrowserRouter>
    
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)