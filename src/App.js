import React, { Component } from 'react'
import  Navbar  from './Components/Navbar'
import News from './Components/News'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
      <Router>       
        <Navbar/>
      
           <Switch>
          <Route exact   path="/">       
               <News   key={1} country="in" category="general"/> 
                </Route>  
          <Route exact  path="/business">    
           <News   key={2} country="in" category="business"/>  
           </Route> 
          <Route exact  path="/entertainment">
            <News   key={3} country="in" category="entertainment"/>
              </Route> 
          <Route exact  path="/health">  
                <News  key={4}  country="in" category="health"/>
                  </Route> 
          <Route exact  path="/science">     
           <News   key={5} country="in" category="science"/>
             </Route> 
          <Route exact  path="/sports">
                    <News  key={16}  country="in" category="sports"/>
                      </Route> 
          <Route exact  path="/technology"> 
             <News  key={19}  country="in" category="technology"/>  
             </Route> 
             </Switch>
       </Router>

          
      </div>
    )
  }
}
